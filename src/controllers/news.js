const newsModel = require("../models/news");

exports.getAllNews = (req, res) => {
  const noticias = newsModel.getNews(); // Obtém as notícias do modelo
  res.render("index", { noticias }); // Renderiza a view com as notícias
};
