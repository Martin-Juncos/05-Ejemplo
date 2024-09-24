const getPostsHandler = (req, res) => {
  res.send("Estos son los posteos");
};
const getPostHandler = (req, res) => {
  const { id } = req.params;
  res.send(`Este es el posteo con id ${id}`);
};
const createPostHandler = (req, res) => {
  const { title, body } = req.body;
  res.send(`Este posteo se titula ${title} y dice ${body}`);
};

module.exports = { getPostsHandler, getPostHandler, createPostHandler };
