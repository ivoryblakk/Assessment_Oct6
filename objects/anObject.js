var anObject = {
  string1: 'initial value',
  count: 1,
  printString: function(number) {
    var keyname = 'string' + number;
    console.log(this[keyname]);
  },
  modifyString: function(string, number) {
    var keyname = 'string' + number;
    this[keyname] = string;
  },
  addNewProperty: function(newProperty) {
    this.count++;
    var keyname = 'string' + this.count;
    this[keyname] = newProperty;
  }
};

anObject.printString(1);
anObject.modifyString('test string', 1);
anObject.printString(1);
anObject.addNewProperty('whasssuupppp');
anObject.printString(2);
