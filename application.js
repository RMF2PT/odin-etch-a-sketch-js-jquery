$(document).ready(function() {
  newGrid(16, 16);

});

function newGrid(gridHeight, gridWidth) {
  
  for (var i = 0; i < gridHeight; i++) {
    for (var j = 0; j < gridWidth; j++) {
      var square = $("<div class='square'>" + i + " " + j +"</div>");
      $(".sketchpad").append(square);
    }
    $(".sketchpad").append("<br>");
  }
}
