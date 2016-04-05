/*
Name:		register.js
Author:		Seamus Nugent
Date:		25/03/2016
Purpose:	
*/
//Do initial security check
// Ignore jquery syntax if the screen doesn't pass security check
if (initialCheck() == false){
}
else {
	var hasError = true;
	/* tasks to do after the page loads*/
	$(document).ready(function(){
		populateFields();
		enableButton();
		$("#txtStudentId").focus();
		$("#txtStudentId").blur(function (e) {
			checkNumber();
			checkStudentId();
			enableButton();
		});	

		$("#txtStudentId").keyup(function (e) {
			if(e.which != 9 ) {
				if (checkNumber() == true){
					hideError("studentIdError","errorStudRow");	
				}
		    }
			enableButton();
		});	
		
		$("#txtPassword").blur(function (e) {
			checkPassword();
			enableButton();
		});	
		
		$("#txtPassword").keyup(function (e) {
			if(e.which != 9) {
				if (checkPassword() == true){
					hideError("passwordError","errorPassRow");	
				}
			}
			enableButton();
		});		
		$("#txtConfirm").blur(function (e) {
			checkConfirm(true);
			enableButton();
		});
		$("#txtConfirm").keyup(function (e) {
			if(e.which != 9) {
				if (checkConfirm(false) == true){
					hideError("confirmError","errorConfRow");	
				}
			}
			enableButton();
		});			
	});
	//End document.ready

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


function checkStudentId(){
	var isValid = true;
	if ($("#txtStudentId").val() == ""){
		$("#studentIdError").val("Student Id must have a value");
		showError("studentIdError","errorStudRow");
		isValid = false;
	}
	else if (($("#txtStudentId").val().length < 8) ){
		$("#studentIdError").val("Student Id be at least 8 digits");
		showError("studentIdError","errorStudRow");
		isValid = false;
	}
	return isValid;
}
function checkNumber(){
	var isValid = true;
	if (isInt($("#txtStudentId").val()) == false){
		$("#studentIdError").val("Student Id must be a number");
		showError("studentIdError","errorStudRow");
		isValid = false;
	}
	return isValid;
}

function checkPassword(){
	var isValid = true;
		
	if ($("#txtPassword").val() == ""){
		$("#passwordError").val("Password must have a value");
		showError("passwordError","errorPassRow");
		isValid = false;
	}
	return isValid;
}

function checkConfirm(ipCheckMatch){
	var isValid = true;
	if ($("#txtConfirm").val() == ""){
		$("#confirmError").val("Confirm must have a value");
		showError("confirmError","errorConfRow");
		isValid = false;
	}
	else if (($("#txtConfirm").val() != $("#txtPassword").val()) 
			 && (ipCheckMatch == true) ){
		$("#confirmError").val("Confirm and Password must match");
		showError("confirmError","errorConfRow");
		isValid = false;
	}
	
	return isValid;

}
function validForm(){
	var isValid = true;
	if (checkStudentId() != true || checkNumber() != true || checkPassword() != true
	    || checkConfirm(true) != true ){
		isValid = false;
	}
	else if($("#txtPassword").val().length < 8){
		$("#passwordError").val("Password must be at least 8 characters");
		showError("passwordError","errorPassRow");
		isValid = false;
		
	}

	return isValid;
}
/* Disable or Enable the submit button*/
function enableButton(){
	if ($("#txtStudentId").val() == "" || $("#txtPassword").val() == "" || $("#txtConfirm").val() == ""){
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
function goNext(){
	var stURL = './html/register2.html';
	var stOtherParams = "";
	if (validForm() == true){
		stURL = stURL + "?txtStudentId=" + $("#txtStudentId").val();
		stURL = stURL + "&txtPassword="  + $("#txtPassword").val();
		stURL = stURL + "&txtConfirm="   + $("#txtConfirm").val();
		if (stParamNames.length > 0){
			stOtherParams = getNumParams(3, stParamNames.length);
			stOtherParams = "&" + stOtherParams.substring(1);
		}
		
		stURL = stURL + stOtherParams;
		callPage(stURL,'Register2','0');

		
	}
	
}
