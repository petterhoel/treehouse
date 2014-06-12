// Problem: hints are shown even when form is valif
// Solution hide and show them at approriate times

// Hide hints
$("form span").hide();

var $password = $("#password");
var $confirm = $("#confirm_password");

function isPasswordValid(){
	return $password.val().length > 8;
}

function arePasswordsMatching(){
	return $confirm.val() === $password.val();
}

function canSubmit(){
	return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
		// find out if password is valid	
	if (isPasswordValid()){
		// hide hint if valid 
		$password.next().hide();
	} else {
		// else show hints
		$password.next().show();
	}
}

function confirmPasswordEvent(){
	// find out if password and confirmation match
	if (arePasswordsMatching()){
		// hide hint if match
		$confirm.next().hide();
		// else show hint 
	} else {
		$confirm.next().show();
	}	
}

function enableSubmitEvent(){
	$("#submit").prop("disabled", !canSubmit());
}

// When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

// When event happpens on confirmation input
$confirm.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();