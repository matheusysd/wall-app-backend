module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
};
