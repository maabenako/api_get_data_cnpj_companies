const express = require("express");
const empresaRoutes = require("./routes/empresa.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", empresaRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
