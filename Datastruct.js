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

}
nameList = ['MX Black', 'MX Red', 'MX Clear', 'MX Gray', 'MX Green', 'MX Speed Silver', 'MX Silent Red', 'MX Blue', 'MX Brown'];
desList = ['Powerful and Direct. \n A linear switch with increased spring force',
           'Smooth and Direct. \n A linear switch with low spring resistance. A first choice for beginners',
           'Focused, Powerful, and Noticeable. \n A tactile switch with no click, and a sister model to the MX Brown and MX Grey',
           'Focused, Robust, and Noticeable. \n A slightly modified version of the MX Brown. Offers increased actuation force.',
           'Clicky, Robust, and Noticeable. \n A slightly modified version of the MX Blue. Offers increased actuation force.',
           'Fast and Direct. \n The fastest model of CHERRY MX in full height. Linear with low spring resistance.',
           'Smooth and Silent. \n A modified version of the MX red that uses damping to reliably minimize noise.',
           'Clicky and Noticeable. \n A tactile switch that provides audible acoustic feedback.',
           'Focused and Noticeable. \n A tactile switch with noticeable feedback'];
pressureList = [60, 45, 65, 80, 80, 45, 45, 60, 55];
tactileList = [false, false, true, true, true, false, false, true, true];
clickyList = [false, false, false, false, true, false, false, true, false];
urlEndList = [13, 14, 50, 84, 48, 363, 476, 12, 11];

