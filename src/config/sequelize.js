const Sequelize = require("sequelize");
const config = require("./config");

<<<<<<< HEAD
const sequelize = new Sequelize(config);
=======
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
>>>>>>> 2538a195836736884cdbf5d643bf30dab5a52504

module.exports = sequelize;
