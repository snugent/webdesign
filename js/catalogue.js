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