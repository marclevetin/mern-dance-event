const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailValidation = function(value) {
  return value.includes('@') && value.includes('.')
}

const wsdcValidation = function(value) {
  return value > 0 || value === null
}

const personSchema = new Schema({
  firstName: { type: String, required: [true, 'First name is required'] },
  lastName: { type: String, required: [true, 'Last name is required'] },
  wsdc: { type: Number, validate: [wsdcValidation, 'WSDC must be a number'] }, // should not be required to accomodate new competitors
  phone: { type: String }, // intentionally making this a string for now
  email: { type: String, validate: [emailValidation, 'Email address is invalid'] },
  address: {
    street: String,
    city: String,
    stateProvince: String, // it's common to have international addresses
    postalCode: String
  }
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

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
