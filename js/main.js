var canvas = document.getElementById('color-picker');
var colorPicker = new ColorPicker(canvas, colorFunction);
colorPicker.buildColorPalette();

function colorFunction(color) {
    var colorBlock = document.getElementsByClassName('color-block')[0];
    colorBlock.style.backgroundColor = 'rgb(' + color + ')';
};