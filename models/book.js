// REQUIRE MONGOOSE
const mongoose = require("mongoose");
const { Schema } = mongoose;

// SCHEMA
const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  year: { type: Number },
  quantity: { type: Number },
  imageURL: { type: String },
});

// MODEL & EXPORT
module.exports = mongoose.model("Book", bookSchema);
