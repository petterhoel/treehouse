// Problem: No user interaction causes no change to application
// Solution: When user interacts cause changes approperiately

var color = $(".selected").css("background-color");

// when clicking on control list items
$(".controls").on("click", "li", function() {
	// deselect sibling elements
	$(this).siblings().removeClass("selected");
	// select clicked element
	$(this).addClass("selected");
	// cache current color
	color = $(this).css("background-color");
});

	

// when new color is pressed 
$("#revealColorSelect").click(function(){
	// Show color select or hide the color select
	changeColor();
	$("#colorSelect").toggle();
});
	
// update "new color" span
function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();

	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

// When color slider change 
$("input[type=range]").change(changeColor);


// When "add color" is pressed
$("#addNewColor").click(function(){
	// Append the color to the controls ul
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	// Select the new color
	$newColor.click();
	// select clicked element

});


// On mouse events on the canvas 
	// draw lines