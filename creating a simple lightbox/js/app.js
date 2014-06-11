// Problem: user when clicking on image goes to a dead end. 

// Solution: create an overlay with the large image - lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
// Add an overlay
$overlay.append($image);
$("body").append($overlay);
  // An image
  // A caption
//1. Capture click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  // Show the overlay
  
  $overlay.show();
});
  // Get  childs alt attribute and set caption

//When overlay is clicked 
$overlay.click.(function(){
  //hide the overlay
  $overlay.hide();
});


