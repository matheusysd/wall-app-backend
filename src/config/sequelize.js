require("dotenv").config();

const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(config[process.env.APP_ENVIRONMENT || "development"]);

module.exports = sequelize;
