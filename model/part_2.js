const mongoose = require("mongoose");
// Define schema
const Schema = mongoose.Schema;

const Part_2Schema = new Schema({
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
const Part_2Model = mongoose.model("Part_2", Part_2Schema);
module.exports = Part_2Model;
