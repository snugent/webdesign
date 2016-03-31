/*
Name:		login.js
Author:		Seamus nugent
Date:		20/03/2016
Purpose:	Holds javascript functions specific to logout.html.
*/

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
