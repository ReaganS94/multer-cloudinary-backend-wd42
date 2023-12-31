const Image = require("../schemas/Image");

const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    if (!images.length) {
      return res.status(200).json({ msg: "No pictures found" });
    } else {
      return res.status(200).json(images);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

const uploadImage = async (req, res) => {
  try {
    if (req.file && req.file.path) {
      const image = new Image({
        url: req.file.path,
        description: req.body.desc,
      });

      await image.save();
      return res.status(200).json({ msg: "Image successfully saved" });
    } else {
      console.log(req.file);
      res.status(422).json({ msg: "Invalid" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

module.exports = { getImages, uploadImage };
