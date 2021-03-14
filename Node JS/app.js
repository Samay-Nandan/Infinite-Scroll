require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
var cors = require("cors");

app.use(express.json());

app.use(cors());

const ProductRoute = require("./Routes/Products");

app.use(ProductRoute);

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("Connected to Database");
    app.listen(port, () => console.log(`app listening on port ${port}!`));
  })
  .catch((err) => {
    console.log(err);
  });
