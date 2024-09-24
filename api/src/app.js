const express = require("express");
const morgan = require("morgan");
const mainRoutes = require("./routes/mainRoutes");

const app = express();

// Usar Morgan para registrar todas las solicitudes
app.use(morgan("dev"));

// Le decimos al servidor que use json
app.use(express.json());

// Creamos un middleware
app.use((req, res, next) => {
  console.log("Este es mi middleware!");
  next();
});

app.use("/api", mainRoutes);

module.exports = app;
