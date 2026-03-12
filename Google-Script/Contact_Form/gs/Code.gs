function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Contacts') || ss.insertSheet('Contacts');

  if (sheet.getLastRow() == 0) {
    sheet.appendRow(["Date", "Name", "Subject", "Email", "Message"]);
  }

  try {
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(), 
      data.name, 
      data.subject, 
      data.email, 
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      "status": "success", 
      "message": "Message saved successfully to Sheet!"
    })).setMimeType(ContentService.MimeType.JSON)
       .addHeader("Access-Control-Allow-Origin", "*");
       
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      "status": "error", 
      "message": err.toString()
    })).setMimeType(ContentService.MimeType.JSON)
       .addHeader("Access-Control-Allow-Origin", "*");
  }
}