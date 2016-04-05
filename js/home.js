/*
Name:		home.js
Author:		Seamus Nugent
Date:		02/04/2016
Purpose:	Javascript for home screen
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