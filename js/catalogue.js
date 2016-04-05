/*
Name:		catalogue.js
Author:		Ahasan Ali
Date:		28/04/2016
Purpose:	javascript file for catalogue.html
*/
//Do initial security check
// Ignore jquery syntax if the screen doesn't pass security check
if (initialCheck() == false){
}
else {
	/* tasks to do after the page loads*/
	$(document).ready(function(){

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

// Changes the status of the books when it is reserved/borrowed
function changeStatus(ipiItem){
	var stCurrentStatus = $("#status-" + ipiItem).text();
	if(sutiableBrowser() == true) {
		if(isLoggedIn() == "true"){
			if (stCurrentStatus == "Available"){
				$("#status-" + ipiItem).text("Un-available");
			}
			else{
				alert("The item is not available");
			}
		}//End ifLoggedIn
		else{
			alert("Please log into the system");
		}
	}// if suitableBrowser
}//End change Menu