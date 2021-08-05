function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("index");
}

function saveDetails(answerArray){
  
  const spresdSheetID = "1YBEa3p-4Q3PKforSfSzOJYLBGOIDyRP9FSq5WylBFRk";
  const spreadSheet = SpreadsheetApp.openById(spresdSheetID);

  const workingSheet = spreadSheet.getSheetByName("Sheet1");

  workingSheet.appendRow(answerArray);

}
function saveFile(obj) {
   var dropbox = "UploadFiles";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
  var blob = Utilities.newBlob(Utilities.base64Decode(obj.data), obj.mimeType, obj.fileName);
  var file = folder.createFile(blob);   
  return file.getUrl();
}

