// convert this code to work with callbacks

function importedModule(number1, number2, cb) {
  var result = 0000;
  var err = null;
  if (isNaN(number1) == false && isNaN(number2) == false) {
    console.log('true');
    result = number1 + number2;
  } else {
    err = 'argument is not a number';
  }
  cb(err, result);
}

function devSideCode(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
}

importedModule(3, 4, devSideCode);
// -> 7

importedModule(3, 'tim', devSideCode);
// -> argument is not a number
