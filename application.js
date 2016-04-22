$(document).ready(function() {
  newGrid(16);
  $(".startNew").click(function() {
    $(".square").remove();
    newGrid(16);
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
