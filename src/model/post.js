const post = (sequelize, DataTypes) => {
  const Post = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    authorId: {
      type: DataTypes.STRING,
    },
  });

  return Post;
};

module.exports = post;
