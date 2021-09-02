const post = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
  });

  return Post;
};

module.exports = post;
