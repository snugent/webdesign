/*
Name:		logout.js
Author:		Seamus nugent
Date:		12/02/2016
Purpose:	Holds javascript functions specific to logout.html.
*/
/* By Default outout.html will always logout of the system*/
$(document).ready(function(){
	logout();
});
/* Log out of the system*/
function logout(){
	var iCnt = 0;
	if(sutiableBrowser() == true) {
	    // Delete all session variables.	
	    for (iCnt = 0; iCnt < sessionStorage.length; iCnt++)  
	    {   
	        key = sessionStorage.key(iCnt);  
	        val = sessionStorage.removeItem(key);   
	    } 
		
	}
	setLogin("false");
	$("#MapSection").html("");
}
