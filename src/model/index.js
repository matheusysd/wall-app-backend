const sequelize = require("../config/sequelize");
const Sequelize = require("sequelize");
const Post = require("./post");
const User = require("./user");

const postModel = Post(sequelize, Sequelize.DataTypes);
const userModel = User(sequelize, Sequelize.DataTypes);

const db = {
  postModel,
  userModel,
  sequelize,
};

module.exports = db;
