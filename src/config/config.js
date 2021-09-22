require("dotenv/config");

const obj = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "wall_dev",
    host: process.env.HOST,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "wall_test",
    host: process.env.HOST,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "wall_prod",
    host: process.env.HOST,
    dialect: "postgres",
  },
};
module.exports = obj[process.env.APP_ENVIRONMENT];
