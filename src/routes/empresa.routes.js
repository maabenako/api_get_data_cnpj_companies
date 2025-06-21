const express = require("express");
const router = express.Router();
const { getEmpresa } = require("../controllers/empresa.controller");

router.get("/empresa/:cnpj", getEmpresa);

module.exports = router;
