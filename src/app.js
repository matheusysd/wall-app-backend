require("dotenv/config");
const express = require("express");
const cors = require("cors");

const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/post", postRoute);
app.use("/user", userRoute);

module.exports = app;
