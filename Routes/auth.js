const authctrl = require("../src/controller/auth.controller");
const AuthCheck = require("../src/rbac/authcheck");

const AuthRoutes = require("express").Router();

AuthRoutes.post("/login", authctrl.login);
AuthRoutes.post("/register", authctrl.register);
AuthRoutes.get("/me", AuthCheck);
AuthRoutes.get ("/contact", authctrl.contact);

module.exports = AuthRoutes;
