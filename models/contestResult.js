const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contestResultSchema = new Schema({
  contest: { type: String, required: [true, 'Contest name is required'] },
  role: { type: String, required: [true, 'Role is required'] },
  contestantScores: { type: Array, required: [true, 'Contestant Scores are required']  },
  result: { type: String, required: [true, 'Result is required']},

});

const ContestResult = mongoose.model("ContestResultSchema", contestResultSchema);

module.exports = ContestResult;
