/*
Name:		register2.js
Author:		Seamus Nugent
Date:		25/03/2016
Purpose:	
*/
// Radio Buttons with the same name in Internet Explorer 9 can cause problems 
//Do initial security check
// Ignore jquery syntax if the screen doesn't pass security check

if (initialCheck() == false){
}
else {
	var radioValue = "male";
	var hasError = true;
	/* tasks to do after the page loads*/
	$(document).ready(function(){
		populateFields();
		populateRadio(getParamValue("rsSex"));
		if (getParamValue("rsSex") != ""){
			radioValue = getParamValue("rsSex");
		}
		enableButton();
		$("#txtName").focus();
		$("#txtName").blur(function (e) {
			checkName();
			enableButton();
		});	

		$("#txtName").keyup(function (e) {
			if(e.which != 9 ) {
				hideError("nameError","errorNameRow");	
		    }
			enableButton();
		});	
		
		$("#txtEmail").blur(function (e) {
			checkEmail();
			validEmail();
			enableButton();
		});	
		
		$("#txtEmail").keyup(function (e) {
			if(e.which != 9) {
				if (checkEmail() == true){
					hideError("emailError","errorEmaiRow");	
				}
			}
			enableButton();
		});		
		$("#txtPhone").blur(function (e) {
			checkNumber();
			checkPhone();
			validPhone();
			enableButton();
		});
		$("#txtPhone").keyup(function (e) {
			if(e.which != 9 ) {
				if (checkNumber() == true){
					hideError("errorPhone","errorPhonRow");	
				}
		    }
			enableButton();
		});			
	});
	// End $(document).ready
}

/* Other javascript fuctions*/
//Part of a security check.  Checks that this screen is called correctly
function initialCheck(){
	if (typeof securityCheck == "function")	{
		return true;
	}
	else {
		alert("Invalid Link");
		window.location.href = "../index.html";
		return false;
	}
}// initialiseScreen does security checks

// Check the name is valid
function checkName(){
	var isValid = true;
	if ($("#txtName").val() == ""){
		$("#nameError").val("Namemust have a value");
		showError("nameError","errorNameRow");
		isValid = false;
	}

	return isValid;
}
// Check email is valid
function checkEmail(){
	var isValid = true;
		
	if ($("#txtEmail").val() == ""){
		$("#emailError").val("Email must have a value");
		showError("emailError","errorEmaiRow");
		isValid = false;
	}
	return isValid;
}

//Check phone is valid
function checkPhone(){
	var isValid = true;
	if ($("#txtPhone").val() == ""){
		$("#phoneError").val("Phone must have a value");
		showError("phoneError","errorPhonRow");
		isValid = false;
	}	
	return isValid;

}
//on leave of phone field do further checks
function validPhone(){
	var isValid = true;
	if ($("#txtPhone").val().length < 4){
		$("#phoneError").val("Phone must have at least 4 digits");
		showError("phoneError","errorPhonRow");
		isValid = false;
	}	
	return isValid;

}
/* Disable or Enable the submit button*/
function enableButton(){
	if ($("#txtName").val() == "" || $("#txtEmail").val() == "" || $("#txtPhone").val() == ""){
		hasError = true;
	}
	else{
		hasError = false;
	}
	if (hasError == true){
		$("#btnNext").prop("disabled", true);
		$("#btnNext").addClass("buttonDisabled");
	}
	else {
		$("#btnNext").prop("disabled", false);
		$("#btnNext").removeClass("buttonDisabled");
	}
}

//Further sanity checks on phone when the screen submits 
function checkNumber(){
	var isValid = true;
	if (isInt($("#txtPhone").val()) == false){
		$("#phoneError").val("Phone must be a number");
		showError("phoneError","errorPhonRow");
		isValid = false;
	}
	return isValid;
}
//Further sanity checks on email when the screen submits
function validEmail(){
	var isValid = true;
	if ($("#txtEmail").val().length < 5){
		$("#emailError").val("Email is too short");
		showError("emailError","errorEmaiRow");
		isValid = false;
	}
	else if ($("#txtEmail").val().indexOf("@") < 0){
		$("#emailError").val("Email must contain @ symbol");
		showError("emailError","errorEmaiRow");
		isValid = false;
	}
	else if ($("#txtEmail").val().indexOf("@") < 1){
		$("#emailError").val("Email format is invalid");
		showError("emailError","errorEmaiRow");
		isValid = false;
	}
	else if ($("#txtEmail").val().indexOf(".") < 0){
		$("#emailError").val("Email must contain .");
		showError("emailError","errorEmaiRow");
		isValid = false;
	}
	else if ($("#txtEmail").val().indexOf(".") < 3){
		$("#emailError").val("Email format is invalid");
		showError("emailError","errorEmaiRow");
		isValid = false;
	}
	else if ($("#txtEmail").val().indexOf(".") ==  ($("#txtEmail").val().length - 1)){
		$("#emailError").val("Email format is invalid");
		showError("emailError","errorEmaiRow");
		isValid = false;
	}

	return isValid;
}
//Final Checks
function validForm(){
	var isValid = true;
	if (checkName() != true || checkEmail() != true || checkPhone() != true
	    || validPhone() != true || validEmail() != true){
		isValid = false;
	}
	
	return isValid;
}
/* Goes forwards a screen */
function goNext(){
	var stURL = './html/confirm.html';
	var stParams = "";
	if (validForm() == true){
		stParams = getNumParams(0, 2); 
		
		stParams = stParams + "&txtName=" + $("#txtName").val();
		stParams = stParams + "&rsSex=" + radioValue;
		stParams = stParams + "&txtEmail="  + $("#txtEmail").val();
		stParams = stParams + "&txtPhone="   + $("#txtPhone").val();
	
		stURL = stURL + stParams;
		callPage(stURL,'Confirm','0');
	}
}
/* Goes backwards a screen */
function goBack(){
	var stParamsLink = getNumParams(0, stParamNames.length);
	
	stParamsLink = stParamsLink + "&txtName=" + $("#txtName").val();
	stParamsLink = stParamsLink + "&rsSex=" + radioValue;
	stParamsLink = stParamsLink + "&txtEmail="  + $("#txtEmail").val();
	stParamsLink = stParamsLink + "&txtPhone="   + $("#txtPhone").val();
	callPage('./html/register.html' + stParamsLink,'Register','1');
}
// IE 9 struggles to find radio value if more than 1 have the same value
// so we use a variable instad.  
function setRadioValue(ipiRadioValue){
	radioValue = ipiRadioValue;
}