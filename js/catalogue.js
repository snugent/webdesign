/*
Name:		catalogue.js
Author:		
Date:		
Purpose:	
*/

/* tasks to do after the page loads*/
$(document).ready(function(){

});

/* Other javascript fuctions*/
function changeStatus(ipiItem){
	var stCurrentStatus = $("#status-" + ipiItem).text();
	if (stCurrentStatus == "Available"){
		$("#status-" + ipiItem).text("Un-available");
	}
	else{
		alert("The item is not available");
	}
	
}