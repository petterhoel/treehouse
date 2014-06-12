// Problem: hints are shown even when form is valif
// Solution hide and show them at approriate times

// Hide hints
$("form span").hide();

var $password = $("#password");
var $confirm = $("#confirm_password");

function passwordEvent(){
		// find out if password is valid	
	if ($password.val().length > 8){
		// hide hint if valid 
		$password.next().hide();
	} else {
		// else show hints
		$password.next().show();
	}
}

function confirmPasswordEvent(){
	// find out if password and confirmation match
	if ($confirm.val() == $password.val()){
		// hide hint if match
		$confirm.next().hide();
		// else show hint 
	} else {
		$confirm.next().show();
	}	
}

// When event happens on password input
$("#password").focus(passwordEvent).keyup(passwordEvent);

// When event happpens on confirmation input
$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

