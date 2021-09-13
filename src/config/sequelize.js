require("dotenv").config();

const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: true,
  },
});

module.exports = sequelize;
