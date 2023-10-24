console.log("Prima mea apilcatie de node.");

const express = require("express");
const app = express();
const port = 3000;

const logger = require("morgan"); //importing a HTTP logger

app.use(logger("dev")); //using the HTTP logger library

app.get("/", (req, res) => {
  res.setHeader("content-type", "text/plain");
  res.status(200);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
