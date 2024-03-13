require("dotenv").config();
const express = require("express");
const app = express();
const port  = 5000;

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.get("/twitter", (req, res) => {
  res.send("Welcome to Twitter");
});
app.get("/login", (req, res) => {
  res.send("<h1>login </h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`listening on ${port}`);
});
