// @ts-nocheck
function doGet() {
return HtmlService.createHtmlOutputFromFile("fhtm");
}

function userClicked(userinfo)
{


var url="https://docs.google.com/spreadsheets/d/1qVL3Aq11nJ1V4PoqWszTfch_IujI3QnoiadgmolNKso/edit#gid=0";
var ss= SpreadsheetApp.openByUrl(url);
var ws= ss.getSheetByName("Data");



ws.appendRow([userinfo.username,userinfo.stage,userinfo.semester,userinfo.modules,userinfo.email,userinfo.com1]);


}

