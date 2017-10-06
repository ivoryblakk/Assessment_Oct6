var controller = {
  addText: function(inputedText) {
    model.addText(inputedText);
  },
  printText: function() {
    view.display(model.text);
  }
};
