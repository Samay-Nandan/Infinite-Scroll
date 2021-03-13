const express = require("express");
const app = express();
const port = 4000;

const BodyParser = require("body-parser");

app.use(BodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});


const ProductRoute = require("./Routes/Products");

app.use(ProductRoute);

const mongoose = require("mongoose");
const MongoDBURL = "mongodb://localhost:27017";
mongoose
  .connect(MongoDBURL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((result) => {
    console.log("Connected to Database");
    app.listen(port, () => console.log(`app listening on port ${port}!`));
  })
  .catch((err) => {
    console.log(err);
  });
