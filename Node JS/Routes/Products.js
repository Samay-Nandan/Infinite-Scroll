const express = require("express");
const router = express.Router();
const { getProducts, postProduct } = require("../Controllers/Products");

router.get("/getProducts/:page/:limit", getProducts);

router.post("/postProducts", postProduct);

module.exports = router;
