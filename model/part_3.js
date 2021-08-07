const mongoose = require("mongoose");
// Define schema
const Schema = mongoose.Schema;

const Part_3Schema = new Schema({
  partTitle: String,
  sectNum: { type: Number },
  sectBody: [
    {
      subNum: { type: Number },
      subBody: [String]
    }
  ]
});

// Compile model from schema
const Part_3Model = mongoose.model("Part_3", Part_3Schema);
module.exports = Part_3Model;
