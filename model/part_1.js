const mongoose = require("mongoose");
// Define schema
const Schema = mongoose.Schema;

const Part_1Schema = new Schema({
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
const Part_1Model = mongoose.model("Part_1", Part_1Schema);
module.exports = Part_1Model;
