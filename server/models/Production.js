const mongoose = require("mongoose");

const productionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  images: [String], // array of image URLs
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Production", productionSchema);
