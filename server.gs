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
  var blob = Utilities.newBlob(Utilities.base64Decode(obj.data), obj.mimeType, obj.fileName);
  return DriveApp.createFile(blob).getUrl();
}

function uploadFiles(form) {
  
  try {
    
    var dropbox = "UploadFiles";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
    var blob = form.myFile;    
    var file = folder.createFile(blob);    
    file.setDescription("Uploaded by " + form.myName);
        
    return "File uploaded successfully <br><a id='url' target='_blank' href='" + file.getUrl()+"'>"+file.getUrl()+"</a>";
    
  } catch (error) {
    
    return error.toString();
  }
  
}
