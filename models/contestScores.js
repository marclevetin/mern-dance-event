const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contestScoreSchema = new Schema({
  contestant: { type: String, required: [true, 'Contestant is required'] },
  contest: { type: String, required: [true, 'Contest name is required'] },
  contestantRole: { type: String, required: [true, 'contestantRole is required']  },
  scores: {
    judge: { type: String },
    score: { type: String }
  }

});

const ContestScore = mongoose.model("ContestScoreSchema", contestScoreSchema);

module.exports = ContestScore;
