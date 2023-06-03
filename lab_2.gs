function doGet() {
  
  return HtmlService.createTemplateFromFile("page").evaluate();

}

function userClicked(userInfo){

  var url= "https://docs.google.com/spreadsheets/d/13PW5JHxOADU-p_YCZrN6nUOk6a_jV1WaE7nyYPF3qFg/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws= ss.getSheetByName("Data");
  ws.appendRow([userInfo.firstName,userInfo.lastName,userInfo.app]);

}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();

}
