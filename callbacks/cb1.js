function arrayReverserModuleSide(arrayToReverse, cb) {
  var arr = arrayToReverse;
  var newArr = [];
  var result = null;
  var err = null;
  if (Array.isArray(arrayToReverse) == true) {
    for (var i = arr.length; i--; ) {
      newArr.push(arr[i]);
      result = newArr;
    }
  } else {
    err = 'argument is not an array';
  }
  cb(err, result);
}

arrayReverserModuleSide([3, 4, 5, 6, 7], function cb(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
}); // -> [7, 6, 5, 4, 3]

arrayReverserModuleSide({ 3: 3, 4: 4, 5: 5, 6: 6, 7: 7 }, function cb(
  err,
  result
) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
}); // -> argument was not an array
