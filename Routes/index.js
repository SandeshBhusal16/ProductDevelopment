const AuthRoutes = require("./auth");
const galleryRoutes = require("./gallery.routes");
const eventRoutes = require ("./event.routes")

const app = require("express").Router();

app.use("/auth", AuthRoutes);
app.use("/gallery", galleryRoutes);
app.use ("/event" , eventRoutes);

module.exports = app;
