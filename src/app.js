require("dotenv").config();
const express = require("express");
const { sequelize } = require("./model");
const pg = require("pgtools");
const cors = require("cors");

const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/post", postRoute);
app.use("/user", userRoute);
sequelize.sync().then(() => console.log("connected"));

app.listen(4000, () => {
  console.log("app is online");
});
