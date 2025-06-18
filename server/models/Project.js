const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  swiper: {
    type: String,
    enum: ["booths", "events", "interior"],
    required: true,
  },
  iframe: { type: String, required: true },
  title: String,
  category: String,
  behanceUrl: { type: String, required: true }, // ✅ new field
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);
