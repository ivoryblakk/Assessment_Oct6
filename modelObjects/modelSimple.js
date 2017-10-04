// here's a model object for manipulating people
// people look like this: {name:'', id: 0000}
// make it work
var personModel = {
  DB: {},
  nextID: 0000,
  addPerson: function(newNameString) {
    var message = '';
    if (typeof newNameString == 'string') {
      personModel.DB[this.nextID] = { name: newNameString };
      message = personModel.DB[this.nextID].name + 'successfully added';
      this.nextID++;
    } else {
      message = 'This is not a string';
    }
    return message;
  },
  getPersonById: function(personId) {
    var message = '';
    var person = {};
    if (isNaN(personId) == false) {
      person = personModel.DB[personId];
      message = 'We found ';
    } else {
      message = 'person ID is not a number';
    }
    return [message, person];
  },
  getPersonByName: function(personName) {
    var message = '';
    var person = {};
    if (typeof personName == typeof 'string') {
      for (var i = 0; i < Object.keys(personModel.DB).length; i++) {
        if (personModel.DB[i].name == personName) {
          person = personModel.DB[i];
          message = 'We found ';
        } else {
          message = 'There is no one by the name ' + personName;
        }
      }
    } else {
      message = 'personName is not valid';
    }
    return [message, person];
  },
  modifyPerson: function(personId, newNameString) {
    var message = '';
    if (isNaN(personId) == false)
      if (typeof newNameString == 'string') {
        personModel.DB[personId].name = newNameString;
        message = personModel.DB[personId].name + ' successfully modified';
      } else {
        message = 'This is not a string';
      }
    else {
      message = 'personId is not a number';
    }
    return message;
  },
  deletePerson: function(personId) {
    var message = '';
    if (isNaN(personId) == false) {
      delete personModel.DB[personId];
      message = 'This person has been removed';
    } else {
      message = 'personId is not a number';
    }
    return message;
  },
  getAllPeople: function() {
    var message = 'The DB includes: ';
    var people = [];
    // for (var i = 0; i < Object.keys(personModel.DB).length; i++) {
    //   people.push(personModel.DB[i]);
    //   console.log('people: ' + people);
    //   message = 'This database includes: ';
    // }
    //console.log(this.DB);
    for (var key in this.DB) {
      people.push(this.DB[key]);
    }
    return [message, people];
  }
};
personModel.addPerson('george');
console.log(personModel.DB);
personModel.addPerson('Rein');
console.log(personModel.DB);
personModel.addPerson('Rad');
console.log(personModel.DB);

//console.log(personModel.getPersonById(0));
//console.log(personModel.getPersonByName('gege'));
//personModel.modifyPerson(0, 'Flo');
//console.log(personModel.modifyPerson(0, 'Flo'));
console.log(personModel.deletePerson(0));
console.log(personModel.getAllPeople());
/*console.log('Should print: "george successfully added":');
console.log('---- ', personModel.addPerson('george'));
console.log('Should print: "laurens successfully added":');
console.log('---- ', personModel.addPerson('laurens'));
console.log('Should print: a message and a george object:');
console.log('---- ', personModel.getPersonById(0));
console.log('Should print: a message and a laurens object:');
console.log('---- ', personModel.getPersonByName('laurens'));
console.log('Should print: a message and a george object:');
console.log('---- ', personModel.modifyPerson(0, 'your goats'));
console.log('Should print a message and an array of people');
console.log('---- ', personModel.getAllPeople());
console.log('Should print a message and an array of peolpe without your goats');
console.log('---- ', personModel.deletePerson(0));
console.log('Should print a message and an array of peolpe without laurens');
console.log('---- ', personModel.deletePerson(1));
*/
