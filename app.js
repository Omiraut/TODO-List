const express = require("express");
const app = express();
const port = 3000;
const db = require("./models");
app.unsubscribe(express.json());
db.sequelize.sync();
app.get("/", (req, res) => {
  res.status(200).send("connection is working");
});
app.listen(port, () => {
  console.log("App is Running on Port No :- ", port);
});
