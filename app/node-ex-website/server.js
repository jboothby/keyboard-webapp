// import fs (filesystem) for node.js
const fs = require('fs');

function add(object){
    // fs is a node.js module. fs is filesystem. This amounts to an import statement

    let switchRaw = fs.readFileSync('db.json');
    let switchData = JSON.parse(switchRaw);

    // switchData[0] is the array of keys in the db.json file
    switchData.keySwitches.push(object);

    let returnData = JSON.stringify(switchData, null, 2);
    fs.writeFileSync('db.json', returnData);


}

// remove object from db.json using the name field
// to remove an object, pass it's name as a parameter such as remove('MX Brown')
function remove(objName){

    //read json file into memory
    let switchRaw = fs.readFileSync('db.json');
    let switchData = JSON.parse(switchRaw);

    // filter names that match from the switch data
    switchData.keySwitches = switchData.keySwitches.filter(data => data.Name !== objName);

    // restructure data as json, and write over file
    let returnData = JSON.stringify(switchData, null, 2);
    fs.writeFileSync('db.json', returnData);

}

// checks to see if the user entered the correct credentials
// return true if matching, false otherwise
function validate(user, pass){

    // read db.json into memory
    let dbRaw = fs.readFileSync('db.json');
    let dbData = JSON.parse(dbRaw);

    // save data from db
    let authorizedName = dbData.login[0].username;
    let authorizedPW = dbData.login[0].password;

    //check for equality
    if( user === authorizedName && pass === authorizedPW ){
        console.log('login accepted');
        return true;
    }

    console.log('login denied');
    return false;

}
// -------------------------------------------------- Begin server code ------------------------- //
// import express, path from the node modules
// body parser is for handling POST commands (sending info to server)
const express = require('express');
const path = require('path');
const port = 3000;

//create an app variable using express function
const app = express();
app.use(express.json());
// this line serves all files in the "express" directory automatically and statically
app.use(express.static("express"));

// bodyParser is middleware for post requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));//handle URL encoded post requests
app.use(bodyParser.json());// handle JSON post requests

// define routing for the login page. This is accessed from login-button on the keyboards.html page
app.route('/login').post(function(req, res) {
    // grab data from ajax post
    let user_name = req.body.user;
    let password = req.body.password;
    console.log("User_name: "+user_name+", password: "+password);
    if( validate(user_name, password)){
        console.log('Redirecting user to /express/admin.html');
        res.sendFile(__dirname+'/express/admin.html');
    }
    else{
        res.end('no');
    }
    // return yes
});

// define routing for adding to database
app.route('/add').post(function(req,res){
    // convert post data to json object, print to console.
    let obj = JSON.parse(JSON.stringify(req.body));
    // only add object if the name field is not blank
    if(obj['Name'] !== '') {
        add(obj);
    }
    else {
        res.end('no');
    }
    console.log(obj);
});

// define routing for removing from the database
app.route('/remove').post(function(req,res){
    // the name is stored as the first key in a null-type object, so we extract that
    let n = Object.keys(req.body)[0];
    console.log('Removing item with name: ' + n);
    remove(n);
    console.log('Remove Successful');
})

// define routing for the client to request db.json file using get
app.route('/db.json').get(function(req,res){
    console.log('db.json routing sucessful, returning db.json');
    let dbRaw = fs.readFileSync('db.json');
    let db = JSON.parse(dbRaw);
    res.json(db);
});

// define default routing for website. Directs to index.html
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
});

// start the server listening on port defined above (3000 by default)
app.listen(port);
console.debug('Server listening on port ' + port);