const express = require("express");
const { getAuth  } = require("../access/auth.js");
const { finalCalculation, calculateGradeForExam } = require("../services/calculations.js");
const app = express();

app.get("/updateStudentsRows", async (req, res) => {
  const { googleSheets, auth, spreadsheetId } = await getAuth();

  const rows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "engenharia_de_software",
  });

  const finalResult = finalCalculation(rows.data);
  console.log("Final calculation result:", finalResult);

  let values = [];
  Object.values(finalResult).forEach((value) => {
    values.push(
      [
        value.situation, 
        calculateGradeForExam(value.average, value.situation) 
      ]
    );
  });
  console.log("Values for update prepared:", values);

  res.send(finalResult);

  googleSheets.spreadsheets.values.update({
    spreadsheetId,
    range: "engenharia_de_software!G4:H",
    valueInputOption: "RAW",
    resource: { values },
  });
  console.log("Updated Google Sheets with new values.");
});

app.listen(3001, () => console.log("Server running on port 3001."));
