function myFunction() {
  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var SSrange = SS.getDataRange();
  var SSdata = SSrange.getValues();

  for(var i=1; i<SSrange.getHeight(); i++){
    var email = SSdata[i][0];
    var subject = SSdata[i][1];
    var body = SSdata[i][2];
    MailApp.sendEmail(email,subject,body);
  }
}