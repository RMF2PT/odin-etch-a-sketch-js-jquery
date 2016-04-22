$(document).ready(function() {
  newGrid(16);
  $(".startNew").click(function() {
    startNew();
  })
});

function newGrid(nSquares) {
  var squareWidth = ($(".sketchpad").width() / nSquares);
  var squareHeight= ($(".sketchpad").height() / nSquares);
  for (var i = 0; i < nSquares; i++) {
    for (var j = 0; j < nSquares; j++) {
      var square = $("<div class='square'></div>");
      $(".sketchpad").append(square);
    }
  }
  $(".square").width(squareWidth).height(squareHeight);
  hoverHighlight();
}

function hoverHighlight() {
  $(".square").hover(function() {
    $(this).addClass('highlight');
  });
}

function startNew() {
  var nSquares = parseInt(prompt("How many squares per side should have the new grid? (Maximum: 128)"));
  while (isNaN(nSquares) || nSquares > 128 || nSquares <= 0) {
    nSquares = parseInt(prompt("Please, provide a number between 1 and 128? (Squares per side)"));
  }
  $(".square").remove();
  newGrid(nSquares);
}
