// each instance of Keyswitch is a certain type of key
class Keyswitch{
  // the constructor sets all of the attributes for the switch
  constructor(name, description, pressure, tactile, clicky, urlEnd) {
    this.name = name;
    this.description = description;
    this.pressure = pressure;
    this.tactile = tactile;
    this.clicky = clicky;
    this.urlEnding = urlEnd;// urlEnd is the 2 digit integer at the end of the URL
                            // for the marketplace, it determines the correct page to
                            // send the user to
    this.url = 'https://mechanicalkeyboards.com/shop/index.php?l=product_list&c='
  }
  printDescription(){

    // convert the true/false to yes/no for printing
    let click = 'no';
    let tact = 'no';
    if( this.clicky ){
      click = 'yes';
    }
    if( this.tactile ){
      tact = 'yes'
    }

    // output all of the information to the console log
    console.log(  this.name + '\n' +
                  this.description + '\n' +
                  'Tactile: ' + tact + '\n' +
                  'Clicky: ' + click + '\n' +
                  'Pressure: ' + this.pressure + ' grams\n' +
                  'Marketplace: ' + (this.url.concat(this.urlEnding)) +'\n');

  }


}// end keyswitch class


// switchlist holds an array of Keyswitches, and the methods to sort them
class Switchlist{

  // initialize the empty list
  constructor(){
    this.list = [];
  }

  // add switches to the list
  addSwitch(s){
    this.list.push(s);
  }

  // print each switch in the list
  printAllKeys(){
      for( let i = 0; i < this.list.length; i++){
        this.list[i].printDescription();
      }
  }


  // method used to sort the current switchlist in alphabetic order by name
  // uses the strategy design pattern to implement the bubble sort, but on different attributes of the parent object
  sort( attribute ){
    //ensure parameter is allowed
    if ( !(attribute==='name' || attribute==='pressure' || attribute==='clicky' || attribute==='tactile') ) {
      console.log('Incorrect parameter ' + attribute + ' passed to sort');
      return;
    }

    // implement a simple bubble sort algorithm
    for( let i = 0; i < this.list.length; i++) {
      for( let j = 1; j < this.list.length; j++){


        if( attribute==='name'){
          if( this.list[j].name < this.list[j-1].name ) {
            this.swap(j);
          }
        }

        else if( attribute==='pressure' ) {
          if (this.list[j].pressure < this.list[j - 1].pressure) {
            this.swap(j);
          }
        }

        else if( attribute==='clicky' ) {
          // if current is true, and last is false, switch. frontloads trues
          if (this.list[j].clicky && !this.list[j - 1].clicky) {
            this.swap(j);
          }
        }

        else if( attribute==='tactile' ) {
          // if current is true, and last is false, switch. frontloads trues
          if (this.list[j].tactile && !this.list[j - 1].tactile) {
            this.swap(j);
          }
        }

      }
    }
  }// end of sort method

  // simple method responsible or swapping items in list
  // reduces clutter and repeated code in the sort method
  swap(index){
    let temp = this.list[index - 1];
    this.list[index-1] = this.list[index];
    this.list[index] = temp;
  }

}

// This structure holds the information about each key
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

// create instance of Switchlist to hold all of the switches
let sl = new Switchlist();

// populate the Switchlist with switches using the keyData struct above
for( let i = 0; i < keyData.length; i++){
  sl.addSwitch( new Keyswitch( keyData[i].name, keyData[i].description, keyData[i].pressure,
                                keyData[i].tactile, keyData[i].clicky, keyData[i].urlEnd));
}

console.log('-----Sorting by Name-----\n');
sl.sort('name');
sl.printAllKeys();

console.log('\n-----Sorting by pressure-----\n');
sl.sort('pressure');
sl.printAllKeys();

console.log('\n-----Sorting by clicky-----\n');
sl.sort('clicky');
sl.printAllKeys();

console.log('\n-----Sorting by tactile-----\n');
sl.sort('tactile');
sl.printAllKeys();