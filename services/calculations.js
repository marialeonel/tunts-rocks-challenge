function calculateAverage(rows, positions) {
  const validRows = positions.map(pos => rows[pos]).filter(value => !isNaN(value));
  
  if (validRows.length === 0) {
    console.log("No valid grades found. Returning undefined.");
    return;
  }

  const sumGrades = validRows.reduce((acumulate, value) => acumulate + parseInt(value), 0);
  const average = sumGrades / validRows.length;
  console.log("Average calculated:", average);
  return average;
}


function calculateFaults(rows) { 
  const faults = parseInt((rows[2] / 60) * 100);
  console.log("Faults calculated:", faults);
  return faults;
}


function calculateSituation(faults, average) {
  let situation;
  if (faults > 25) {
    situation = "Reprovado por Falta";
  } else if (average < 50) {
    situation = "Reprovado por Nota";
  } else if (average >= 50 && average < 70) {
    situation = "Exame Final";
  } else {
    situation = "Aprovado";
  }
  console.log("Situation calculated:", situation);
  return situation;
};


function calculateGradeForExam(average, result) {
  let gradeForExam;
  if (result === "Exame Final") {
    gradeForExam = Math.round(100 - average);
  } else {
    gradeForExam = 0;
  }
  console.log("Grade for exam calculated:", gradeForExam);
  return gradeForExam;
};

function finalCalculation(data) {
  console.log("Performing final calculation...");
  const decisiveResult = {};

  const rows = data.values.slice(3);
  rows.forEach((row, index) => {
    const average = calculateAverage(row, [3, 4, 5]);
    const faults = calculateFaults(row);
    const situation = calculateSituation(faults, average);

    decisiveResult[index] = {
      average,
      faults,
      situation,
    };
  });

  console.log("Final calculation complete. Result:", decisiveResult);
  return decisiveResult;
}

module.exports = { finalCalculation, calculateGradeForExam};
