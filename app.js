const express = require("express");
const app = express();
const newsRoutes = require("./src/routes/news");

// Configuração da view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Middleware para parse de JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos
app.use(express.static("./src/public"));

// Rotas principais
app.use("/", newsRoutes);

// Middleware para tratamento de erros 404
app.use((req, res, next) => {
  res.status(404).render("404", { message: "Página não encontrada" });
});

// Middleware para tratamento de erros gerais
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("500", { message: "Erro interno do servidor" });
});

// Iniciando o servidor na porta 5500
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
