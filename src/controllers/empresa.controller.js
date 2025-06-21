const { buscarEmpresaPorCNPJ } = require("../models/empresa.model");

const getEmpresa = (req, res) => {
  const cnpj = req.params.cnpj;
  const empresa = buscarEmpresaPorCNPJ(cnpj);
  if (!empresa) {
    return res.status(404).json({ erro: "Empresa não encontrada" });
  }
  return res.json(empresa);
};

module.exports = { getEmpresa };
