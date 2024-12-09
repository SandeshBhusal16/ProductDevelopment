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
  jobTitle: {
    type: String,
    required: true,
  },
});

const ContactModel = mongoose.model("ContactUs", ContactSchema);
module.exports = ContactModel;
