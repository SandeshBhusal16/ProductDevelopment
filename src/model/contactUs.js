const mongoose = require("mongoose");
// Customers will be asked to
// provide their name, email address, phone number, company name, country, job title, and job details
// using a Contact Us form
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
  jobTitle: {
    type: String,
    required: true,
  },
});

const ContactModel = mongoose.model("ContactUs", ContactSchema);
module.exports = ContactModel;
