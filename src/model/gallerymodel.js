const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: [
    {
      type: String,
      required: true,
    },
  ],
  rating: {
    type: String,
  },
});

const GalleryModel = mongoose.model("Gallery", GallerySchema);

module.exports = GalleryModel;
