const usersrv = require("../service/auth.service");
const bcrypt = require("bcryptjs");
const jwtToken = require("jsonwebtoken");

class AuthController {
  login = async (req, res, next) => {
    try {
      let payload = req.body;
      await usersrv.login(payload);
      let response = await usersrv.findUserByEmail(payload.email);
      if (response) {
        let checkPass = bcrypt.compareSync(payload.password, response.password);
        console.log("passcheck", checkPass);

        let accessToken = jwtToken.sign(
          { id: response._id },
          process.env.JWT_KEY,
          {
            expiresIn: "1 day",
          }
        );
        if (checkPass) {
          res.json({
            data: {
              AscessToken: accessToken,
              data: response,
            },
            msg: "login successfull",
          });
        } else {
          throw { msg: "Credential doesnot match" };
        }
      } else {
        throw { msg: "Credential doesnot match" };
      }
    } catch (error) {
      console.log("login", error);
      next({
        msg: error,
        code: 500,
        meta: null,
      });
    }
  };

  register = async (req, res, next) => {
    try {
      let data = req.body;
      await usersrv.registerValidation(data);
      data.password = bcrypt.hashSync(data.password, 10);
      let response = await usersrv.createUser(data);
      if (response) {
        res.json({
          data: response,
          msg: "Registered Successfully",
          code: 200,
          meta: null,
        });
      }
    } catch (error) {
      console.log("register", error);
      next({
        msg: error,
      });
    }
  };
  contact = async (req, res, next) => {
    try {
      let data = req.body;

      // Validate contact data
      if (!data.name || !data.email || !data.message) {
        throw { msg: "All fields (name, email, message) are required." };
      }

      // Save contact data using a service
      let response = await usersrv.saveContact(data);

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

const authctrl = new AuthController();
module.exports = authctrl;
