// here's a model object for manipulating people
// people look like this: {name:'', id: 0000}
// make it work
var personModel = {
  DB: {},
  nextID: 0000,
  addPerson: function(newNameString, cb) {
    var result = '';
    var err = null;
    if (typeof newNameString == 'string') {
      personModel.DB[this.nextID] = { name: newNameString };
      result = personModel.DB[this.nextID].name + ' successfully added';
      this.nextID++;
    } else {
      err = 'This is not a string';
    }
    cb(err, result);
  },
  getPersonById: function(personId, cb) {
    var result = '';
    var err = null;
    if (isNaN(personId) == false) {
      result = 'We found ' + personModel.DB[personId];
    } else {
      message = 'person ID is not a number';
    }
    cb(err, result);
  },
  getPersonByName: function(personId, cb) {
    var result = '';
    var err = null;
    if (typeof personName == typeof 'string') {
      for (var i = 0; i < Object.keys(personModel.DB).length; i++) {
        if (personModel.DB[i].name == personName) {
          result = 'We found ' + personModel.DB[i];
        } else {
          err = 'There is no one by the name ' + personName;
        }
      }
    } else {
      err = 'personName is not valid';
    }
    cb(err, result);
  },
  modifyPerson: function(personId, newName, cb) {
    var result = '';
    var err = null;
    if (isNaN(personId) == false)
      if (typeof newNameString == 'string') {
        personModel.DB[personId].name = newNameString;
        result = personModel.DB[personId].name + ' successfully modified';
      } else {
        err = 'newName is not a string';
      }
    else {
      err = 'personId is not a number';
    }
    cb(err, result);
  },
  deletePerson: function(id, cb) {
    var result = '';
    var err = null;
    if (isNaN(personId) == false) {
      delete personModel.DB[personId];
      result = 'This person has been removed';
    } else {
      err = 'personId is not a number';
    }
    cb(err, result);
  },
  getAllPeople: function(cb) {
    var message = 'The DB includes: ';
    var people = [];
    var result = '';
    for (var key in this.DB) {
      people.push(this.DB[key]);
    }
    result = [message, people];
    cb(result);
  }
};

console.log('Should print: "george successfully added":');
personModel.addPerson('george', function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
console.log('Should print: "laurens successfully added":');
// method call here
console.log('Should print: a george object:');
// method call here
console.log('Should print: a laurens object:');
// method call here
console.log('Should print: a your goats object:');
// method call here
console.log('Should print: an array of people');
// method call here
console.log('Should print: an array of peolpe without your goats');
// method call here
console.log('Should print: an array of peolpe without laurens');
// method call here
