// Google Apps Script - Backend API for Login & Registration
// File: Code.gs

const SHEET_NAME = 'Sheet1'; // Change this if your sheet name is different

function doPost(e) {
  // CORS setup for requests from external websites
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    
    if (action === "register") {
      return handleRegistration(data);
    } else if (action === "login") {
      return handleLogin(data);
    } else {
      return createResponse("error", "Invalid action request.");
    }
  } catch (error) {
    return createResponse("error", "Server Error: " + error.message);
  }
}

function handleRegistration(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const dataRange = sheet.getDataRange().getValues();
  
  // Check if email already exists
  for (let i = 1; i < dataRange.length; i++) {
    if (dataRange[i][2] === data.email) {
      return createResponse("error", "Email is already registered! Please login.");
    }
  }
  
  // Create new user data
  const newId = "USER-" + Utilities.getUuid().substring(0, 8).toUpperCase();
  const hashedPassword = hashPassword(data.password);
  const date = new Date().toLocaleString();
  
  // Save to Google Sheet
  sheet.appendRow([newId, data.name, data.email, hashedPassword, date]);
  
  return createResponse("success", "Registration successful! You can now login.");
}

function handleLogin(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const dataRange = sheet.getDataRange().getValues();
  const hashedInputPassword = hashPassword(data.password);
  
  // Find email and check password
  for (let i = 1; i < dataRange.length; i++) {
    if (dataRange[i][2] === data.email) {
      if (dataRange[i][3] === hashedInputPassword) {
        // Login successful
        const userData = {
          id: dataRange[i][0],
          name: dataRange[i][1],
          email: dataRange[i][2]
        };
        return createResponse("success", "Login successful!", userData);
      } else {
        return createResponse("error", "Incorrect password. Please try again.");
      }
    }
  }
  
  return createResponse("error", "Email not found. Please register first.");
}

// Function to encrypt the password using SHA-256
function hashPassword(password) {
  const rawHash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, password);
  let txtHash = '';
  for (let i = 0; i < rawHash.length; i++) {
    let hashVal = rawHash[i];
    if (hashVal < 0) {
      hashVal += 256;
    }
    if (hashVal.toString(16).length == 1) {
      txtHash += '0';
    }
    txtHash += hashVal.toString(16);
  }
  return txtHash;
}

// Helper function to format the JSON response
function createResponse(status, message, data = null) {
  const response = { status: status, message: message, data: data };
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}