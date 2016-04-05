/*
Name:		account.js
Author:		Jason Cullen
Date:		03/04/2016
Purpose:	javascript files for account .html
*/
//Do initial security check
// Ignore jquery syntax if the screen doesn't pass security check
if (initialCheck() == false){
}
else {
	/* tasks to do after the page loads*/
	$(document).ready(function(){
		setInitialDate();
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

//returns a book
function hideRow(ipstName){
	$("#r-" + ipstName).slideUp();
}
//renews a book 
function renewBook(ipstFieldName){
	var initialDate = setDate(7);

	$("#" + ipstFieldName).html(initialDate);
}

//Set Initial Date on the reserved date and screen;
function setInitialDate(){
	var initialDate = setDate(1);
	$("td[id^='td-']").text(initialDate);
}

function showBook(ipstBookName){
	var stURL = encodeURI("../html/viewer.html?name=" +ipstBookName);
	callPage(stURL,"Viewer", "2");
}
