const { Router } = require("express");
const {
  getUsersHandler,
  createUserHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../handler/userHandlers");
const userRoutes = Router();

// Users
userRoutes.get("/", getUsersHandler);
userRoutes.get("/:id", getUserHandler);
userRoutes.post("/", createUserHandler);
userRoutes.put("/:id", updateUserHandler);
userRoutes.delete("/:id", deleteUserHandler);

module.exports = userRoutes;
