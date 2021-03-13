const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
