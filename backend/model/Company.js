const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
  },
  companyAddress: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  messSubject: {
    type: String,
    required: true,
  },
  messBody: {
    type: String,
    required: true,
  },
  dateSubmitted: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model("Company", companySchema, "Clients"); // Ensure schema name is consistent
