const express = require("express");
const app = express();
console.log("3");
const port = 3000;
const router = require("./src/routes/routes");
const db = require("./src/models");
app.unsubscribe(express.json());
console.log("7");

app.get("/", (req, res) => {
  res.status(200).send("connection is working");
});

db.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log("App is Running on Port No :- ", port);
  });
});
// app.listen(port, () => {
//   console.log("App is Running on Port No :- ", port);
// });
