/*
Name:		index.js
Author:		Seamus nugent
Date:		12/02/2016
Purpose:	Holds javascript functions specific to index.html.
*/

$(document).ready(function(){
	/* By Default index.html always opens the home page*/
	
	assignParameters(encodeURI(window.location.href));
	showMenu();
	if (getParamValue("p") == "login"){
		$("#LoginMenu").click();
		
	}
	else{
		$("#HomeMenu").click();
	}
	$("#txtTopUsrId").keyup(function () {
		checkTopEntry($("#txtTopUsrId").val(), $("#txtTopPassword").val());
	});	

	$("#txtTopPassword").keyup(function (e) {
		checkTopEntry($("#txtTopUsrId").val(), $("#txtTopPassword").val());
		/* On Return on password field we have treat the screen
		 * as if we pressed the submit button
		 * */
	    if(e.which == 13) {
	        $("#btnTopLogin").click();
	    }		
	});
});

/* Disable or Enable the login button*/
function checkTopEntry(ipUserId, ipPassword){
	if (ipUserId == "" || ipPassword == ""){
		$("#btnTopLogin").prop("disabled", true);
		$("#btnTopLogin").addClass("buttonDisabled");
	}
	else {
		$("#btnTopLogin").prop("disabled", false);
		$("#btnTopLogin").removeClass("buttonDisabled");
	}
}


