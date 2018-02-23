const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const endDateValidation = function(value) {
  return val > this.startDate;
}

const eventSchema = new Schema({
  name: { type: String, required: [true, 'Event Name is required'] },
  logo: { type: String },
  startDate: { type: Date, required: [true, 'Event Start Date is required'] },
  endDate: {
    type: Date,
    required: [true, 'Event End Date is required'],
    validate: [endDateValidation, 'Event End Date must be after Event Start Date']
  },
  location: {type: String, required: true}
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
