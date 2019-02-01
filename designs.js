//set variables
var height, width, color;

//get inputs for makeGrid
$("#sizePicker").submit(function(event) {
  event.preventDefault();
  height = $("#inputHeight").val();
  width = $("#inputWidth").val();
  makeGrid(height, width);
});

//create Grid
function makeGrid(height, width) {
  $("tr").remove();
  for (var row = 1; row <= height; row++) {
    $("#pixelCanvas").append("<tr id=table" + row + "></tr>");
    for (var cols = 1; cols <= width; cols++) {
      $("#table" + row).append("<td></td>");
    }
  }

//add colors
$("td").click(function addColor() {
    color = $("#colorPicker").val();
    if ($(this).attr("style")) {
      $(this).removeAttr("style");
    } else {
      $(this).attr("style", "background-color:" + color);
    }
  });
}
