const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contestDetailSchema = new Schema({
  name: { type: String, required: [true, 'Contest name is required'] },
  price: { type: String, required: [true, 'Price is required'] },
  partnerRequired: { type: Boolean, required: [true, 'partnerRequired is required']  },
  prizes: {},
  isProAm: { type: Boolean, required: [true, 'isProAm is required'] },
  judgesArray: { type: Array }, // not required in case the contest needs to be set up ahead of time
  nextContest: {}, // this field will be used to link prelims to finals for example.  Not required because the next contest might not yet be created.
  numberRequiredYesAlts: {
    yes: { type: Number, required: [true, 'Number of Yes is required'] },
    alt: { type: Number, required: [true, 'Number of Alt is required'] }
  },
  contestants: {
    name: { type: String },
    bib: { type: Number },
    role: { type: String }
  }

});

const ContestDetail = mongoose.model("ContestDetailSchema", contestDetailSchema);

module.exports = ContestDetail;
