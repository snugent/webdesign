/*
Name:		catalogue.js
Author:		Ahasan Ali
Date:		28/04/2016
Purpose:	javascript file for catalogue.html
*/

/* tasks to do after the page loads*/
$(document).ready(function(){

});	



// Changes the status of the books when it is reserved/borrowed
function changeStatus(ipiItem){
	var stCurrentStatus = $("#status-" + ipiItem).text();
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
}//End change Menu