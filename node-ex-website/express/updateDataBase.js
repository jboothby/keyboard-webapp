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

// display the contents of db.json file
function display(){

    let switchRaw = fs.readFileSync('db.json');
    let switchData = JSON.parse(switchRaw);

    console.log(switchData);
}

// remove object from db.json using the name field
// to remove an object, pass it's name as a parameter such as remove('MX Brown')
function remove(objName){

    //read json file into memory
    let switchRaw = fs.readFileSync('db.json');
    let switchData = JSON.parse(switchRaw);

    // filter names that match from the switch data
    switchData.keySwitches = switchData.keySwitches.filter(data => data.name != objName);

    // restructure data as json, and write over file
    let returnData = JSON.stringify(switchData, null, 2);
    fs.writeFileSync('db.json', returnData);

}

// checks to see if the user entered the correct credentials, and logs in if matching
function login(){

    // read db.json into memory
    let dbRaw = fs.readFileSync('db.json');
    let dbData = JSON.parse(dbRaw);

    // save data from db
    let authorizedName = dbData.login[0].username;
    let authorizedPW = dbData.login[0].password;

    // save input fields from parent
    let inputFields = document.getElementsByClassName("ui input");
    let inputName = inputFields[0];
    let inputPW = inputFields[1];

    //check for equality
    if( inputName === authorizedName && inputPW === authorizedPW ){
        console.log('login accepted');
        return true;
    }

    console.log('login denied');
    return false;

}