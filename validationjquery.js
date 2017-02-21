 var isfirstNameValid = false;
 var ispermanentAddressValid = false;
 var isemailValid = false;
 var isphoneNoValid = false;
 var ispasswordValid = false;
 var isconfirmPasswordValid = false;

 var firstNameValidation = function() {
 	var pattern1 = /^[a-zA-Z]+$/;
 	var firstName = $('#firstName').val();
 	var result2 = pattern1.test(firstName);
 	if ((result2 != true)) {
 		isfirstNameValid = false;
 		alert("Enter text only");
 		//return false;
 	} else {
 		isfirstNameValid = true;
 		submitValidation();
 		//return true;
 	}
 }
 $('#firstName').blur(firstNameValidation);

 var permanentAddressValidation = function() {
 	if ($('#permanentAddress').val() == "") {
 		alert('Enter your Permanent Address');
 		ispermanentAddressValid = false;
 	} else
 		ispermanentAddressValid = true;
 	submitValidation();
 }
 $('#permanentAddress').blur(permanentAddressValidation);

 $('#checkbox').click(function() {
 	if ($('#checkbox').prop("checked") == true) {
 		$('#currentAddress').val($('#permanentAddress').val());
 		$("#currentAddress").prop("readonly", true);
 	} else {
 		$("#currentAddress").prop("readonly", false);
 	}
 });

 var emailValidation = function(event) {
 	var pattern2 = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
 	var email = $('#email').val();
 	var result3 = pattern2.test(email);
 	if ((result3 != true)) {
 		alert("Enter valid email-id only");
 		isemailValid = false;
 	} else
 		isemailValid = true;
 	submitValidation();
 }
 $('#email').blur(emailValidation);

 var phoneNoValidation = function(event) {
 	var pattern3 = /\d/;
 	var phoneNo = $('#phoneNo').val();
 	var result4 = pattern3.test(phoneNo);
 	if (result4 != true) {
 		alert("Enter digits only");
 		isphoneNoValid = false;
 	} else
 		isphoneNoValid = true;
 	submitValidation();
 }
 $('#phoneNo').blur(phoneNoValidation);

 var passwordValidation = function(event) {
 	var pattern4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
 	var password = $('#password').val();
 	var result5 = pattern4.test(password);
 	if ((result5 != true)) {
 		alert("Enter min 8 digits, 1 capital letter,1 small letter,1 special character");
 		ispasswordValid = false;
 	} else {
 		ispasswordValid = true;
 	}
 	submitValidation();
 }
 $('#password').blur(passwordValidation);

 var confirmPasswordValidation = function(event) {
 	var pass1 = $('#password').val();
 	var pass2 = $('#confirmPassword').val();
 	if (pass1 != pass2) {
 		alert('Password not same');
 		isconfirmPasswordValid = false;
 	} else
 		isconfirmPasswordValid = true;
 	submitValidation();
 }
 $('#confirmPassword').blur(confirmPasswordValidation);

 function submitValidation() {
 	if (isfirstNameValid && ispermanentAddressValid && isemailValid && isphoneNoValid && ispasswordValid && isconfirmPasswordValid)
 		$('#submit').prop('disabled', false);
 	else
 		$('#submit').prop('disabled', true);
 }
 //$('#submit').blur(submitValidation);