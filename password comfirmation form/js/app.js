// Problem: hints are shown even when form is valif
// Solution hide and show them at approriate times

// Hide hints
$("form span").hide();

function passwordEvent(){
		// find out if password is valid	
	if ($(this).val().length > 8){
		// hide hint if valid 
		$(this).next().hide();
	} else {
		// else show hints
		$(this).next().show();
	}
}

function confirmPasswordEvent(){
	console.log("hallo!");
	// find out if password and confirmation match
	if ($(this).val() == $(this).parent().prev().children("#password").val()){
		// hide hint if match
		$(this).next().hide();
		// else show hint 
	} else {
		$(this).next().show();
	}
	
}

// When event happens on password input
$("#password").focus(passwordEvent).keyup(passwordEvent);

// When event happpens on confirmation input
$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

