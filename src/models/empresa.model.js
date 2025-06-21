const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

let empresas = [];

// Caminho absoluto baseado na raiz do projeto
const csvPath = path.join(__dirname, "../../data/empresas_exemplo.csv");

fs.createReadStream(csvPath)
  .pipe(csv())
  .on("data", (row) => {
    empresas.push(row);
  })
  .on("end", () => {
    console.log("✅ Empresas carregadas com sucesso");
  });

const buscarEmpresaPorCNPJ = (cnpj) => {
  return empresas.find((empresa) => empresa.cnpj === cnpj);
};

module.exports = { buscarEmpresaPorCNPJ };
