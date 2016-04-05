/*
Name:		login.js
Author:		Seamus nugent
Date:		20/03/2016
Purpose:	Holds javascript functions specific to logout.html.
*/
//Do initial security check
// Ignore jquery syntax if the screen doesn't pass security check
if (initialCheck() == false){
}
else {
	$(document).ready(function(){
		$("#txtUsrId").keyup(function () {
			checkEntry($("#txtUsrId").val(), $("#txtPassword").val());
		});	

		$("#txtPassword").keyup(function (e) {
			checkEntry($("#txtUsrId").val(), $("#txtPassword").val());
			/* On Return on password field we have treat the screen
			 * as if we pressed the submit button
			 * */
		    if(e.which == 13) {
		        $("#btnLogin").click();
		    }
		});
		setInitialValues();
	});

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



/* Disable or Enable the login button*/
function checkEntry(ipUserId, ipPassword){
	if (ipUserId == "" || ipPassword == ""){
		$("#btnLogin").prop("disabled", true);
		$("#btnLogin").addClass("buttonDisabled");
		hideError("txtErrorMsg", "errorRow");
	}
	else {
		$("#btnLogin").prop("disabled", false);
		$("#btnLogin").removeClass("buttonDisabled");
		showError("txtErrorMsg", "errorRow");
	}
}

function setInitialValues(){
	$("#txtUsrId").val(getParamValue("userId"));
	$("#txtErrorMsg").val(getParamValue("errorMsg"));
	$("#txtUsrId").focus();
	if ($("#txtErrorMsg").val() != ""){
		showError("txtErrorMsg", "errorRow");	
	}
}
