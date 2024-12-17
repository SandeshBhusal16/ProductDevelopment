const ContactModel = require("../model/contactUs.js");


class ContactController {
   contact = async (req, res, next) => {
    try {
      let data = req.body;

      
      if (!data.name || !data.email || !data.phone || !data.companyName || !data.country || !data.jobTitle || !data.jobDetails) {
        throw { msg: "All fields (name, email, phone, companyName, country, jobTitle, jobDetails) are required." };
      }

        
     
      let response = await new ContactModel(data).save();

      if (response) {
        res.json({
          data: response,
          msg: "Thank you for contacting us. We will get back to you soon.",
          code: 200,
          meta: null,
        });
      } else {
        throw { msg: "Failed to submit your message. Please try again later." };
      }
    } catch (error) {
      console.log("contact", error);
      next({
        msg: error,
        code: 500,
        meta: null,
      });
    }
  };
}

const contactCtrl = new ContactController();
module.exports = contactCtrl;
