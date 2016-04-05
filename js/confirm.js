/*
Name:		confirm.js
Author:		Seamus Nugent
Date:		25/03/2015
Purpose:	Allows the user to save their details.
*/
//Do initial security check
// Ignore jquery syntax if the screen doesn't pass security check
if (initialCheck() == false){
}
else {
	/* tasks to do after the page loads*/
	$(document).ready(function(){
		populateTable();
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


/* Shows confirmation that the user has added their details and loads menus.*/
function confirmAdd(){
	$("#PageContent").html('<h1>Your details have been succesfully added.  You are now being logged in</h1>');
	setTimeout(timeoutWait, 1000);
}
/* Populates the tables*/
function populateTable(){
	var iCnt = 0;
	
	for(iCnt = 0; iCnt < stParamValues.length; iCnt++ ){
		if (document.getElementById("td-" + iCnt) != null){
			$("#td-" + iCnt).html(stParamValues[iCnt]);
		}
	}
}

/* Goes backwards a screen */
function goBack(){
	var stParamsLink = getNumParams(0, stParamNames.length);
	callPage('./html/register2.html' + stParamsLink,'Register','1');
}
// Do any actions while timed out
function timeoutWait(){
	login("student", "nci2016", 'Top');
	clearTimeout( timer );
}