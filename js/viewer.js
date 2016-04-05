/*
Name:		viewer.js
Author:		Seamus Nugent
Date:		05/04/2015
Purpose:	Javascript for book viewer screen 
*/
//Do initial security check
// Ignore jquery syntax if the screen doesn't pass security check
if (initialCheck() == false){
}
else {
	/* tasks to do after the page loads*/
	$(document).ready(function(){
		// Load the book function
		loadDocument();
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

function loadDocument(){
	var stData = "books/" + getParamValue("name");
	
	//Load the pdf document into the page
	$("#bookViewer").parent().height("77%");
	$("#bookViewer").attr('data',stData);
}