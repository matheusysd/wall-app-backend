const sequelize = require("../config/sequelize");
const Sequelize = require("sequelize");
const Post = require("./post");

const post = Post(sequelize, Sequelize.DataTypes);

const db = {
  post,
  sequelize,
};

module.exports = db;
