const { post } = require("../model");

exports.post = async (req, res, next) => {
  const { title, body, author } = req.body;
  await post.create({ title, body, author });
  res.send("criou bom");
};

exports.get = async (req, res, next) => {
  const posts = await post.findAll();
  res.json(posts);
};
