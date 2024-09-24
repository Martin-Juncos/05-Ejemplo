const { Router } = require("express");
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

const mainRoutes = Router();

// Creamos nuestras rutas
mainRoutes.use("/users", userRoutes);
mainRoutes.use("/posts", postRoutes);

module.exports = mainRoutes;
