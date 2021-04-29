const mongoose = require("mongoose");
// Define schema
const Schema = mongoose.Schema;

const SectionSchema = new Schema({
  part: String,
  section: String,
  body: String,
  subsection: String
});

// Compile model from schema
const SectionModel = mongoose.model("Section", SectionSchema);
module.exports = SectionModel;
