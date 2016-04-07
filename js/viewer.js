/*
Name:		viewer.js
Author:		Seamus Nugent
Date:		05/04/2015
Purpose:	Javascript for book viewer screen 
*/

/* tasks to do after the page loads*/
$(document).ready(function(){
	// Load the book function
	loadDocument();
});

/* Other javascript fuctions*/
//Loads the document into the html file.  
function loadDocument(){
	var stData = "books/" + getParamValue("name");
	//Load the pdf document into the page
	$("#bookViewer").parent().height("77%");
	$("#bookViewer").attr('data',stData);
}