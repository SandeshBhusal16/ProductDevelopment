const GalleryCtrl = require("../src/controller/gallery.controller");
const uploader = require("../src/middleware/uploder");

const galleryRoutes = require("express").Router();

const dirPath = (req, res, next) => {
  req.uploadPath = "./public/upload";
  next();
};

galleryRoutes.post(
  "/image",
  dirPath,
  uploader.array("image", 10),
  GalleryCtrl.UploadImage
);
galleryRoutes.get("/active/:id");
galleryRoutes.get("/allpost", GalleryCtrl.getAllPost);
galleryRoutes.get("/hello", GalleryCtrl.test);
galleryRoutes.put("/post/update/:id", GalleryCtrl.UpdatePost);

module.exports = galleryRoutes;
