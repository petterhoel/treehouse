// Problem: No user interaction causes no change to application
// Solution: When user interacts cause changes approperiately

var color = $(".selected").css("background-color");
// when clicking on control list items
$(".controls li").click(function() {
	// deselect sibling elements
	$(this).siblings().removeClass("selected");
	// select clicked element
	$(this).addClass("selected");
	// cache current color
	color = $(this).css("background-color");
});

	

// when add color is pressed 
	// Show color select or hide the color select

// When color slider change 
	// update new color span

// When add color is pressed
	// Append the color to the controls ul
	// Select the new color

// On mouse events on the canvas 
	// draw lines