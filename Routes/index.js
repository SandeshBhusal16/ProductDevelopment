const AuthRoutes = require("./auth");
const galleryRoutes = require("./gallery.routes");

const app = require("express").Router();

app.use("/auth", AuthRoutes);
app.use("/gallery", galleryRoutes);

module.exports = app;
