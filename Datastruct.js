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
                  'Pressure: ' + this.pressure + ' grams\n');

  }
}


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

sl.printAllKeys();