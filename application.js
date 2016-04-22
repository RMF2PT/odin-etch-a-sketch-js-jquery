var isRandomColor = false;

$(document).ready(function() {
  newGrid(16);
  $(".startNew").click(function() {
    startNew();
  })
  $(".randomColor").click(function() {
    if (isRandomColor) {
      isRandomColor = false;
    } else {
      isRandomColor = true;
    }
  });
});

function hoverHighlight() {
  $(".square").hover(function() {
    $(this).addClass('highlight');
    if (isRandomColor){
      var color = $(this).css("background-color");
      if (color === "rgb(0, 0, 0)" || color === "rgb(255, 255, 255)"){
        $(this).css("background-color", randomColor());
      }
    }
  });
}

function newGrid(nSquares) {
  var sketchpad = $(".sketchpad");
  var squareWidth = (sketchpad.width() / nSquares);
  var squareHeight= (sketchpad.height() / nSquares);
  for (var i = 0; i < nSquares; i++) {
    for (var j = 0; j < nSquares; j++) {
      sketchpad.append("<div class='square'></div>");
    }
  }
  $(".square").width(squareWidth).height(squareHeight);
  hoverHighlight();
}

function startNew() {
  var nSquares = parseInt(prompt("How many squares per side should have the new grid? (Maximum: 128)"));
  while (isNaN(nSquares) || nSquares > 128 || nSquares <= 0) {
    nSquares = parseInt(prompt("Please, provide a number between 1 and 128? (Squares per side)"));
  }
  $(".square").remove();
  newGrid(nSquares);
}

function randomColor() {
  var color = 'hsl(';
  color += Math.floor(Math.random() * 360);
  color += ",";
  color += Math.floor(Math.random() * 100);
  color += "%,";
  color += Math.floor(Math.random() * 100);
  color += "%)";
  return color;
}
