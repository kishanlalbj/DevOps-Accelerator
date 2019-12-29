const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");

const authRouter = require("./auth/auth");
const engineRouter = require("./routes/engines/engineRouter");
const app = express();
require("dotenv").config();

mongoose
  .connect("mongodb://localhost:27017/devops_accelerator", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch(err => {
    console.log(err);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());
require("./auth/passport")(passport);

if (process.env.NODE_ENV === "production")
  app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/auth/", authRouter);
app.use("/api/engines", engineRouter);

module.exports = app;
