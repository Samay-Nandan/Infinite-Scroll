const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  Title: {
    type: String,
    required: [true, "Please Enter a Title"],
    minlength: [3, "Minimum length 3 characters in Title"],
  },
  Image: {
    type: String,
    required: [true, "Please Enter a Image URL"],
    minlength: [5, "Minimum length 5 characters in Image"],
  },
  Description: {
    type: String,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
