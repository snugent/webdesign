/*
Name:		common.js
Author:		Seamus nugent
Date:		12/02/2016
Purpose:	Holds javascript functions common to all html programs.
*/
/* Shared Variables*/
var stParamNames  = new Array();
var stParamValues = new Array();


/* Opens a html page and places it in a div PageConent */
function callPage(stPageLink, stPageText, stPageType) {
	stPageLink = encodeURI(stPageLink);
	assignParameters(stPageLink);
	
	
	/* Declare variables*/
	var iLevel = parseInt(stPageType.substring(stPageType.length - 1, stPageType.length));
	var stMapText 	= $("#MapText").html();
	var stMapArray;
	var iCnt 	 	= 0;
	var iStrOccurs 	= 0;		
	var stNewLink   = "<a href='" + stPageLink + "' onclick=\'return callPage(this.href, this.innerText, \"" + stPageType + "\");\'>" + stPageText + "</a>";
	var iRemove     = 0;
	
	/* Get rid of any character encoding -> becomes -&gt;*/
	stMapText = stMapText.replace(/&gt;/g, ">");
	
	/* Open the page*/
	$("#PageContent").load(stPageLink);
	
	/* Create Breadcrumbs Menu*/
	if (iLevel == 1){
		$("#MapText").html(stNewLink);
	}
	else if (iLevel > 1){             
		/* Count the number of occurrences of -> in the Text Map String*/
		iStrOccurs = (stMapText.match(/->/gi)||[]).length;
		
		if (iStrOccurs == 0){
			$("#MapText").html(stMapText + "->" + stNewLink);
		}
		else {
			stMapArray = stMapText.split("->");
			/* Get the number of map links to remove if any */
			iRemove = stMapArray.length - iLevel;
			if (iRemove < 0){
				iRemove = 0;
			}
			iRemove = iRemove + 1;
			
			stMapArray.splice((iLevel - 1), iRemove, stNewLink);
			for (iCnt = 0; iCnt < stMapArray.length; iCnt++){
				if (iCnt == 0){
					stMapText = stMapArray[iCnt];					
				} 
				else{
					stMapText = stMapText + "->" + stMapArray[iCnt];
				}
			} 

			$("#MapText").html(stMapText);
		}
	}
		
    return false;
}

/* Login to the system*/
function login(ipUserId, ipPassword, ipSource){
	switch (ipSource) {
	    case "Screen":
			$("#UserId").val("");
			$("#Password").val("");
			checkEntry($("#txtTopUsrId").val(), $("#txtTopPassword").val());
	        break;
	    default:
			$("#txtTopUsrId").val("");
	    	$("#txtTopPassword").val("");
	    	checkTopEntry($("#txtTopUsrId").val(), $("#txtTopPassword").val());
	        break;
	}

	if (ipUserId == "student" && ipPassword == "nci2016"){
		setLogin("true", ipUserId);
		if (ipSource = "Screen"){
			$("#HomeMenu").click();
		} 
	} 
	else{	

		callPage(document.getElementById("LoginMenu").href + '?userId=' + ipUserId + '&errorMsg=' + "Invalid login", 
				document.getElementById("LoginMenu").innerText, "Level1");
	}
	

}

/* Create a session ID*/
function setLogin(isValidLogin, ipUserId){
	if(sutiableBrowser() == true) {
	    // Code for localStorage/sessionStorage.	
		sessionStorage.isLogedIn = isValidLogin;
		sessionStorage.userId    = ipUserId;
		showMenu();
	}
}

/* Determines if the user has logged in and shows appropriate menu*/
function showMenu(){
	var userLoggedIn = false;
	
	    // Code for localStorage/sessionStorage.	
		userLoggedIn = sessionStorage.isLogedIn;

	if (userLoggedIn == "true"){
		$("#HomeMenu").show();
		$("#LoginMenu").hide();
		$("#AccountMenu").show();
		$("#CatalogueMenu").show();
		$("#ContactMenu").show();
		$("#LogoutMenu").show();
		$("#txtTopUsrId").hide();
		$("#txtTopPassword").hide();
		$("#btnTopLogin").hide();
		$("#btnTopRegister").hide();

	}
	else {
		$("#HomeMenu").show();
		$("#LoginMenu").show();
		$("#AccountMenu").hide();
		$("#CatalogueMenu").show();
		$("#ContactMenu").show();
		$("#LogoutMenu").hide();
		$("#txtTopUsrId").show();
		$("#txtTopPassword").show();
		$("#btnTopLogin").show();		
	}	
}

/* Gets a URL parameter*/
function getParamValue(ipParamName){
	var iCnt     = 0;
	var stResult = "";
	for (iCnt = 0; iCnt < stParamNames.length; iCnt++){
		if (stParamNames[iCnt] == ipParamName){
			stResult = stParamValues[iCnt];
			iCnt = stParamNames.length;
		}
	}
	return stResult;
}

/* Put any passed parameters into the shared variables*/
function assignParameters(ipPageLink){
	var iCharPos    = 0;
	var stParams    = "";
	var stParamList = [];
	var stName	    = "";
	var stValue     = "";
	var iCnt	    = 0;
	/* Initialise parameter arrays*/
	stParamNames  = [];
	stParamValues = [];
	
	ipPageLink = decodeURI(ipPageLink);
	iCharPos = ipPageLink.indexOf("?");
	stParams = ipPageLink.substring(iCharPos + 1);
	
	if (iCharPos > 0){
		stParamList = stParams.split("&");
		for (iCnt = 0; iCnt < stParamList.length; iCnt++){
			
			stName   = "";
			iCharPos = stParamList[iCnt].indexOf("=");
			stName   = stParamList[iCnt].substr(0, iCharPos);
			stValue  = stParamList[iCnt].substr(iCharPos + 1);
			/* Add entry to each array */
			stParamNames.push(stName);
			stParamValues.push(stValue);
		}
	}
	
}

/* Get Session Id*/
function isLoggedIn(){
	var bLoggedIn = false;
	if(sutiableBrowser() == true) {
	    // Code for localStorage/sessionStorage.	
		bLoggedIn = sessionStorage.isLogedIn;
	}
	return bLoggedIn; 
}

/* Get Session Id*/
function getUserId(){
	var stUserId = "";
	if(sutiableBrowser() == true) {
	    // Code for sessionStorage user id.	
		stUserId = sessionStorage.userId;
	}
	return stUserId; 
}

function register(){
	callPage("./html/register.html", "Register", "1");
}

function isInt(ipFieldValue){
	var isNumber = false;
	if (isNaN(parseInt(ipFieldValue)) == false){
		isNumber = true;
	}
	return isNumber;
}

function showError(ipchElementId, ipchRowId){
	if ($("#" + ipchElementId).val() != ""){
		$("#" + ipchRowId).slideDown();
	}
}

function hideError(ipchElementId, ipchRowId){
	$("#" + ipchElementId).val("");
	$("#" + ipchRowId).slideUp();	
}

function showTextError(ipchElementId, ipchRowId){
	if ($("#" + ipchElementId).text() != ""){
		$("#" + ipchRowId).slideDown();
	}
}

function hideTextError(ipchElementId, ipchRowId){
	$("#" + ipchElementId).text("");
	$("#" + ipchRowId).slideUp();	
}

function removeTableRow(rowId){
	$("#" + rowId).remove();
}

/* Get a specified number of parameters and copies them into a string for
 * use in a URL.  Used when using back and next buttons.
 * */
function getNumParams(ipiStartParam, ipiEndParam){
	var iCnt = 0; 
	var stNewParams = "";
	for (iCnt = 0; iCnt < stParamNames.length; iCnt++){
		if (iCnt >= ipiStartParam && iCnt <= ipiEndParam ){
			if (iCnt == ipiStartParam){ 
				stNewParams = "?" + stParamNames[iCnt] + "=" + stParamValues[iCnt];
			}
			else{
				stNewParams = stNewParams + "&" + stParamNames[iCnt] + "=" + stParamValues[iCnt];
			}
		}
	}
	return stNewParams;
}
/* 
 * Populates fields based on matching field ids and mating parameters names
 * */
function populateFields(){
	var iCnt = 0;
	for (iCnt = 0; iCnt < stParamNames.length; iCnt++){
		if (document.getElementById(stParamNames[iCnt]) != null){
			document.getElementById(stParamNames[iCnt]).value = stParamValues[iCnt]; 
		}
	}
}

/*
 * 
 */
function populateRadio(ipiRadioName){
	if (document.getElementById(ipiRadioName) != null){
		$("#radio input").removeAttr('checked');
		$("#" + ipiRadioName).attr('checked', true);
		$("#" + ipiRadioName).click();
	}		
}


/* 
 * Checks if a Broswer support session storage
 * */
function sutiableBrowser(){
	var isValid = true;
	if(typeof(Storage) !== "undefined") {
		isValid = true;
	}
	else {
		isValid = false;
	    // Sorry! No Web Storage support..
		alert("Please update your browswer to a newer version");
	}	
	return isValid;
}

/*
 * Security check for subscreens.  Subscreens will try and 
 * call this function.  If they can't find the 
 * function the will call index.html 
 */
function securityCheck(){
	return true;
}
 
//This function was done with the assistance of stack overflow questions 3818193
//Sets a date into the future and returns the date
function setDate(ipiDaysToAdd){
	var dToday  = new Date();
	var dFormat = "";
	var iDay    = 0;
	var iMonth  = 0; 
	var iYear   = 0;
	// Holds String format of each date element.
	// We want 01/01/2016 not 1/1/2016
	var stDay   = "";
	var stMonth = "";
	
	dToday.setDate(dToday.getDate() + ipiDaysToAdd);

	iDay = dToday.getDate();
	iMonth = (dToday.getMonth() + 1);
	iYear = dToday.getFullYear();
	if (iDay < 10){
		stDay = "0" + iDay;
	}
	else {
		stDay = iDay;
	}

	if (iMonth < 10){
		stMonth = "0" + iMonth;
	}
	else {
		stMonth = iMonth;
	}
	dFormat =  stDay + "/"  + stMonth+ "/" + iYear;	
	return dFormat;
}
