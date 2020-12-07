// This structure holds the information about each key, the information is
// global so that all functions can see it
// import data from './db.json';

let keyData = [];
// [
//     {
//         'Name': 'MX Black',
//         'Description': 'Powerful and Direct. \nA linear switch with increased spring force',
//         'Pressure': 60,
//         'Clicky': 'No',
//         'Tactile': 'No',
//         'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=13>Buy Here</a>'
//     },
//     {
//         'Name': 'MX Red',
//         'Description': 'Smooth and Direct. \nA linear switch with low spring resistance. A first choice for beginners',
//         'Pressure': 45,
//         'Clicky': 'No',
//         'Tactile': 'No',
//         'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=14>Buy Here</a>'
//     },
//     {
//         'Name': 'MX Clear',
//         'Description': 'Focused, Powerful, and Noticeable. \nA Tactile switch with no click, and a sister model to the MX Brown and MX Grey',
//         'Pressure': 65,
//         'Clicky': 'No',
//         'Tactile': 'Yes',
//         'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=50>Buy Here</a>'
//     },
//     {
//         'Name': 'MX Gray',
//         'Description': 'Focused, Robust, and Noticeable. \nA slightly modified version of the MX Brown. Offers increased actuation force.',
//         'Pressure': 80,
//         'Clicky': 'No',
//         'Tactile': 'Yes',
//         'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=84>Buy Here</a>'
//     },
//     {
//         'Name': 'MX Green',
//         'Description': 'Clicky, Robust, and Noticeable. \nA slightly modified version of the MX Blue. Offers increased actuation force.',
//         'Pressure': 80,
//         'Clicky': 'Yes',
//         'Tactile': 'Yes',
//         'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=48>Buy Here</a>'
//     },
//     {
//         'Name': 'MX Speed Silver',
//         'Description': 'Fast and Direct. \nThe fastest model of CHERRY MX in full height. Linear with low spring resistance.',
//         'Pressure': 45,
//         'Clicky': 'No',
//         'Tactile': 'No',
//         'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=363>Buy Here</a>'
//     },
//     {
//         'Name': 'MX Silent Red',
//         'Description': 'Smooth and Silent. \nA modified version of the MX red that uses damping to reliably minimize noise.',
//         'Pressure': 45,
//         'Clicky': 'No',
//         'Tactile': 'No',
//         'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=476>Buy Here</a>'

//     },
//     {
//         'Name': 'MX Blue',
//         'Description': 'Clicky and Noticeable. \nA Tactile switch that provides audible acoustic feedback.',
//         'Pressure': 60,
//         'Clicky': 'Yes',
//         'Tactile': 'Yes',
//         'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=12>Buy Here</a>'

//     },
//     {
//         'Name': 'MX Brown',
//         'Description': 'Focused and Noticeable. \nA Tactile switch with noticeable feedback',
//         'Pressure': 55,
//         'Clicky': 'No',
//         'Tactile': 'Yes',
//         'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=11>Buy Here</a>'

//     },
// ]

// console.log("== Printing Data ==")
// console.log(keyData)

// function getData() {

//     $.getJSON('db.json',function(data){
//         console.log("We got data BABY");
//         console.log(data)
//     })

// }

function saveData(data) {
    keyData = data;
    console.log(keyData);
}

function sort(attribute) {
    //ensure parameter is allowed
    if (!(attribute === 'name' || attribute === 'pressure' || attribute === 'clicky' || attribute === 'tactile')) {
        console.log('Incorrect parameter ' + attribute + ' passed to sort');
        return;
    }

    // implement a simple bubble sort algorithm
    for (let i = 0; i < keyData.length; i++) {
        for (let j = 1; j < keyData.length; j++) {


            if (attribute === 'name') {
                if (keyData[j].Name < keyData[j - 1].Name) {
                    this.swap(j);
                }
            }

            else if (attribute === 'pressure') {
                if (keyData[j].Pressure < keyData[j - 1].Pressure) {
                    this.swap(j);
                }
            }

            else if (attribute === 'clicky') {
                // if current is true, and last is false, switch. frontloads trues
                if (keyData[j].Clicky === 'Yes' && keyData[j - 1].Clicky === 'No') {
                    this.swap(j);
                }
            }

            else if (attribute === 'tactile') {
                // if current is true, and last is false, switch. frontloads trues
                if (keyData[j].Tactile === 'Yes' && keyData[j - 1].Tactile === 'No') {
                    this.swap(j);
                }
            }

        }
    }
}// end of sort method

// simple method responsible or swapping items in list
// reduces clutter and repeated code in the sort method
function swap(index) {
    let temp = keyData[index - 1];
    keyData[index - 1] = keyData[index];
    keyData[index] = temp;
}

// Builds the HTML table using the semantic UI class for cell padded table
// Parameter: sortCriteria (The attribute to sort the table based on. Name, Pressure, Clicky, Tactile)
function buildTable(sortCriteria) {

    // Always sort the JSON based on the sort criteria before building the table
    sort(sortCriteria);

    //create a table to hold the data
    let table = document.createElement('table');
    table.setAttribute('class', 'ui cell padded table'); //converts to relevent semantic UI element


    // do the header for the table
    let row = table.insertRow(-1);
    for (let key in keyData[0]) {
        let headerCell = document.createElement("th");
        headerCell.innerHTML = key;
        row.appendChild(headerCell);
    }

    // iterate over each item in the JSON struct, insert new row for each
    for (let i = 0; i < keyData.length; i++) {
        //initialize add an additional row the table. -1 index puts it at the end
        let tr = table.insertRow(-1);
        // create new cell for each item in key in the struct
        for (let key in keyData[i]) {
            let cell = tr.insertCell(-1);
            cell.innerHTML = keyData[i][key];
        }
    }

    // div holds the proper location in the document for the table
    let div = document.getElementById("SwitchTable");

    //check to see if there is a current table, if there is remove it
    let oldTable = div.firstChild;
    if (oldTable != null) {
        div.removeChild(oldTable);
    }

    // add table to document
    div.appendChild(table);
}
