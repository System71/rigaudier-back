const express = require("express");
const app = express();
const XLSX = require("xlsx");

// Chemin vers votre fichier Excel
const workbook = XLSX.readFile("/exemple.xlsx");

// Obtenir le nom de la première feuille
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convertir la feuille en JSON
const data = XLSX.utils.sheet_to_json(sheet);

console.log(data);

app.get("/", (req, res) => {
  res.json({ message: "HELLO WORLD" });
});

app.listen(3000, () => {
  console.log("Server on fire!");
});
