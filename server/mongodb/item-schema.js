const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  ownerId: { type: String, required: true },
  name: { type: String, required: true, minlength: 2, maxlength: 50 },
  type: { type: String, required: true },
  description: { type: String, default: "" },
  imageUrl: { type: String, default: "" },
  price: { type: Number, min: 0, required: true },
  score: { type: Number, default: 0 },
  color: { type: String, default: "" },
  size: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("items", ItemSchema);
