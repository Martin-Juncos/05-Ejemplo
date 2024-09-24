const { Router } = require("express");
const {
  getPostsHandler,
  getPostHandler,
  createPostHandler,
} = require("../handler/postHandlers");
const postRoutes = Router();

// Posts
postRoutes.get("/", getPostsHandler);
postRoutes.get("/:id", getPostHandler);
postRoutes.post("/", createPostHandler);

module.exports = postRoutes;
