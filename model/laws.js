const mongoose = require("mongoose");
// Define schema
const Schema = mongoose.Schema;

const LawsSchema = new Schema({
  partNumber: { type: Number },
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
const LawsModel = mongoose.model("Laws", LawsSchema);
module.exports = LawsModel;
