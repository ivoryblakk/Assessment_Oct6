// write code here that will make the devSide work
var moduleSide = {
  data: [],
  push: function(a) {
    this.data.push(a);
  },
  splice: function(a, b) {
    var A = a + 1;
    if (b) {
      this.data.splice(A, b);
    } else {
      this.data.splice(A);
    }
    return spliced;
  },
  pop: function() {
    this.data.pop();
  },

  clear: function() {
    this.data = [];
  },
  getData: function() {
    console.log(this.data);
  }
};

moduleSide.add();
console.log(moduleSide.add());
moduleSide.splice(2);
module.exports = moduleSide;
