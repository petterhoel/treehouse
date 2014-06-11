// prevent spoilerphobes from seeing spoilers
// solution: hide spoilers and reveal them through user interaction

// 1. hide spoiler
$(".spoiler span").hide();
// 2. Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
// 3. When button pressed
$(".spoiler button").click(function(){
  //3.1 Show spoiler
    $(this).prev().show();
  //3.2 Get rid of button
    $(this).remove();
});
