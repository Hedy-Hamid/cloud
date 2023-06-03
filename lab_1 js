function doGet() {
  return HtmlService.createHtmlOutputFromFile("pages");
}
  function userClicked(name)
{
  var url="https://docs.google.com/spreadsheets/d/13PW5JHxOADU-p_YCZrN6nUOk6a_jV1WaE7nyYPF3qFg/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws= ss.getSheetByName("Data");
  ws.appendRow([name]);

}
