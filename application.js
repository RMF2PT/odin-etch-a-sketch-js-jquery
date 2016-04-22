$(document).ready(function() {
  newGrid(16, 16);
  $(".square").hover(function() {
    $(this).addClass('highlight');
  });
});

function newGrid(gridHeight, gridWidth) {
  var squareWidth = ($(".sketchpad").width() / gridWidth);
  var squareHeight= ($(".sketchpad").height() / gridHeight);
  for (var i = 0; i < gridHeight; i++) {
    for (var j = 0; j < gridWidth; j++) {
      var square = $("<div class='square'></div>");
      $(".sketchpad").append(square);

    }
    $(".sketchpad").append("<br>");
  }
  $(".square").width(squareWidth).height(squareHeight);
}
