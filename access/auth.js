const { google } = require("googleapis");

async function getAuth() {
    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
  
    const client = await auth.getClient();
  
    const googleSheets = google.sheets({
      version: "v4",
      auth: client,
    });
  
    const spreadsheetId = "1EPrpdrceAA6aNHU4an6zXIYRMvGEFhw8sd8t11UFjGk";
  
    return { auth, client, googleSheets, spreadsheetId };
  }

  module.exports = { getAuth }