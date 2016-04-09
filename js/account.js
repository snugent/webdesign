/*
Name:		account.js
Author:		Jason Cullen
Date:		03/04/2016
Purpose:	javascript files for account .html
*/

/* tasks to do after the page loads*/
$(document).ready(function(){
	setInitialDate();
});	


//returns a book
function hideRow(ipstName){
	$("#r-" + ipstName).slideUp();
	return;
}
//renews a book 
function renewBook(ipstFieldName){
	var initialDate = setDate(7);

	$("#" + ipstFieldName).html(initialDate);
	return;
}

//Set Initial Date on the reserved date and screen;
function setInitialDate(){
	var initialDate = setDate(1);
	$("td[id^='td-']").text(initialDate);
}

function showBook(ipstBookName){
	var stURL = "html/viewer.html?name=" +ipstBookName;
	callPage(stURL,"Viewer", "2");
}
