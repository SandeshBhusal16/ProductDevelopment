const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDetails: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const ContactModel = mongoose.model("ContactUs", ContactSchema);
module.exports = ContactModel;
