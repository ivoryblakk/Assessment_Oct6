var handlers = {
  setupEvents: function() {
    var inputedText = document.getElementById('typeLand').value;
    var textButton = document.getElementById('button');
    textButton.addEventListener('click', function() {
      controller.addText(inputedText);
      controller.printText();
    });
  }
};
