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

// these lists hold the information for the keyswitches. each switches information is at the same index in each array
// for example, the Cherry MX Black switch's name is at nameList[0], and it's description is at desList[0], etc...
nameList = ['MX Black', 'MX Red', 'MX Clear', 'MX Gray', 'MX Green', 'MX Speed Silver', 'MX Silent Red', 'MX Blue', 'MX Brown'];
desList = ['Powerful and Direct. \nA linear switch with increased spring force',
           'Smooth and Direct. \nA linear switch with low spring resistance. A first choice for beginners',
           'Focused, Powerful, and Noticeable. \nA tactile switch with no click, and a sister model to the MX Brown and MX Grey',
           'Focused, Robust, and Noticeable. \nA slightly modified version of the MX Brown. Offers increased actuation force.',
           'Clicky, Robust, and Noticeable. \nA slightly modified version of the MX Blue. Offers increased actuation force.',
           'Fast and Direct. \nThe fastest model of CHERRY MX in full height. Linear with low spring resistance.',
           'Smooth and Silent. \nA modified version of the MX red that uses damping to reliably minimize noise.',
           'Clicky and Noticeable. \nA tactile switch that provides audible acoustic feedback.',
           'Focused and Noticeable. \nA tactile switch with noticeable feedback'];
pressureList = [60, 45, 65, 80, 80, 45, 45, 60, 55];
tactileList = [false, false, true, true, true, false, false, true, true];
clickyList = [false, false, false, false, true, false, false, true, false];
urlEndList = [13, 14, 50, 84, 48, 363, 476, 12, 11];

// create instance of Switchlist to hold all of the switches
let sl = new Switchlist();

// populate the Switchlist with switches using the lists above
for( let i = 0; i < nameList.length; i++ ){
  sl.addSwitch( new Keyswitch( nameList[i], desList[i], pressureList[i], tactileList[i], clickyList[i], urlEndList[i]));
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