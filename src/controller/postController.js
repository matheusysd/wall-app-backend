const { postModel } = require("../model");

exports.post = async (req, res) => {
  const { title, body, author } = req.body;
  const response = await postModel.create({ title, body, author });
  res.send({
    message: `Post created successfull at id:${response.dataValues.id}.`,
  });
};

exports.get = async (req, res) => {
  const posts = await postModel.findAll();
  res.json(posts);
};
