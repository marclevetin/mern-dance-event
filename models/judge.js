const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const judgeSchema = new Schema({
  firstName: { type: String, required: [true, 'First name is required'] },
  lastName: { type: String, required: [true, 'Last name is required'] },
});

judgeSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName };
})

const Judge = mongoose.model("Judge", judgeSchema);

module.exports = Judge;
