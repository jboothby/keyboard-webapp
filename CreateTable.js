/* This script creates the semantic UI table to hold the key data
   To add additional keys, just create addition entries in the JSON struct
 */
function build(){
    let keyData = [
        {
            'Name': 'MX Black',
            'Description': 'Powerful and Direct. \nA linear switch with increased spring force',
            'Pressure': 60,
            'Tactile': false,
            'Clicky': false,
            'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=13>Buy Here</a>'
        },
        {
            'Name': 'MX Red',
            'Description': 'Smooth and Direct. \nA linear switch with low spring resistance. A first choice for beginners',
            'Pressure': 45,
            'Tactile': false,
            'Clicky': false,
            'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=14>Buy Here</a>'
        },
        {
            'Name': 'MX Clear',
            'Description': 'Focused, Powerful, and Noticeable. \nA Tactile switch with no click, and a sister model to the MX Brown and MX Grey',
            'Pressure': 65,
            'Clicky': false,
            'Tactile': true,
            'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=50>Buy Here</a>'
        },
        {
            'Name': 'MX Gray',
            'Description': 'Focused, Robust, and Noticeable. \nA slightly modified version of the MX Brown. Offers increased actuation force.',
            'Pressure': 80,
            'Clicky': false,
            'Tactile': true,
            'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=84>Buy Here</a>'
        },
        {
            'Name': 'MX Green',
            'Description': 'Clicky, Robust, and Noticeable. \nA slightly modified version of the MX Blue. Offers increased actuation force.',
            'Pressure': 80,
            'Clicky': true,
            'Tactile': true,
            'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=48>Buy Here</a>'
        },
        {'Name': 'MX Speed Silver',
            'Description': 'Fast and Direct. \nThe fastest model of CHERRY MX in full height. Linear with low spring resistance.',
            'Pressure': 45,
            'Clicky': false,
            'Tactile': false,
            'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=363>Buy Here</a>'
        },
        {'Name': 'MX Silent Red',
            'Description': 'Smooth and Silent. \nA modified version of the MX red that uses damping to reliably minimize noise.',
            'Pressure': 45,
            'Clicky': false,
            'Tactile': false,
            'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=476>Buy Here</a>'
        },
        {'Name': 'MX Blue',
            'Description': 'Clicky and Noticeable. \nA Tactile switch that provides audible acoustic feedback.',
            'Pressure': 60,
            'Clicky': true,
            'Tactile': true,
            'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=12>Buy Here</a>'
        },
        {'Name': 'MX Brown',
            'Description': 'Focused and Noticeable. \nA Tactile switch with noticeable feedback',
            'Pressure': 55,
            'Clicky': false,
            'Tactile': true,
            'URL': '<a href=https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=11>Buy Here</a>'
        },
    ]

    //create a table to hold the data
    let table = document.createElement('table');
    table.setAttribute('class', 'ui cell padded table'); //converts to relevent semantic UI element


    // do the header for the table
    let row = table.insertRow(-1);
    for( let key in keyData[0]){
        let headerCell = document.createElement("th");
        headerCell.innerHTML = key;
        row.appendChild(headerCell);
    }

    // iterate over each item in the JSON struct, insert new row for each
    for( let i = 0; i < keyData.length; i++){

        let tr = table.insertRow(-1);

        // create new cell for each item in key in the struct
        for( let key in keyData[i] ){
            let cell = tr.insertCell(-1);
            cell.innerHTML = keyData[i][key];
        }
    }
    let div = document.getElementById("SwitchTable");
    div.appendChild(table);
}