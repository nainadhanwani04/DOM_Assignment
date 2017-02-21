var handleDropdownClick = function() {
	document.getElementById('AccountDropdown').classList.toggle('show');
}
document.getElementById("firstName").onblur = function() {
	var namePattern = /^[a-zA-Z]+$/;
	var input = document.getElementById("firstName").value;
	var result = namePattern.test(input);
	if ((result != true)) {
		alert("Enter text only");
	}
}

document.getElementById("presentAddress").onblur = function() {
	var presentAddress = document.getElementById("presentAddress").value;
	var input = presentAddress.trim();
	if (input == "") {
		alert("Enter your permanent address")
	}
}

document.getElementById("localAddress").onblur = function() {
	var localAddress = document.getElementById("localAddress").value;
	var input = localAddress.trim();
	if (input == "") {
		alert("Enter your current address")
	}
}

document.getElementById("email").onblur = function() {
	var emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	var input = document.getElementById("email").value;
	var result = emailPattern.test(input);
	if (result != true) {
		alert("Enter valid email having @");
		return false;
	}
}

document.getElementById("checkbox").onclick = function() {
	var input = document.getElementById("checkbox").checked;
	var currentAddress = document.getElementById("localAddress").value;
	var presentAddress = document.getElementById("presentAddress").value;
	if (input == true) {
		currentAddress = presentAddress;
		document.getElementById("localAddress").readOnly = true;
	}
}

document.getElementById("phoneNo").onblur = function() {
	var phonePattern = /\d{10}/;
	var input = document.getElementById("phoneNo").value;
	if ((phonePattern.test(input)) != true) {
		alert("Enter valid 10 digit phone number");
	}
}

document.getElementById("pass1").onblur = function() {
	var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
	var input = document.getElementById("pass1").value;
	if ((passwordPattern.test(input)) != true)
		alert("Enter min 8 digits, 1 capital letter,1 small letter,1 special character");
}
document.getElementById("pass2").onblur = function() {
	var pass1 = document.getElementById('pass1').value;
	var pass2 = document.getElementById('pass2').value;
	if (pass1 != pass2) {
		alert("password not same");
		document.getElementsByClassName("submit").disabled = true;
	} else {
		document.getElementsByClassName("submit").disabled = false;
	}
}


document.getElementById('submit').onclick = function() {

	var parentElement = document.getElementById('dashboard-list-container');
	var childElement = document.createElement('li');
	var email = document.getElementById('email').value;
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	childElement.setAttribute("title", email);
	childElement.innerHTML = firstName + " " + lastName;
	parentElement.appendChild(childElement);
}