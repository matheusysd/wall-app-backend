require("dotenv").config();
const express = require("express");
const { sequelize } = require("./model");
const pg = require("pgtools");
const postRoute = require("./routes/post");


const app = express();

app.use(express.json());
app.use("/post", postRoute);
sequelize.sync().then(() => console.log("connected"));

app.listen(4000, () => {
  console.log("app is online");
});
