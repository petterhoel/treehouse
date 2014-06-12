// Problem. It looks gross in smaller browser widths and small devises
// Solution: to hide text links and swap them out with a more appropriate navigation

// Greate a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);
// Cycle over menu links. 
$("#menu a").each(function(index){
  var $anchor = $(this);
  // Create an option
  var $option = $("<option></option>"); 
  // Deal with selected options depending on current page
  if ($anchor.parent().hasClass("selected")){
    $option.prop("selected", true);
  };
  // Option's value is he href
  $option.val($anchor.attr("href"));
  // option's text is the text of links
  $option.text($anchor.text());
  // append option to select
  $select.append($option);  
});
  
// create a button 
var $button = $("<button>Go</button>");
$("#menu").append($button);
// bind click to button
$button.click(function(){
// go to select location
  window.location = $select.val();
});