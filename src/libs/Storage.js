const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../storage/img"));
  },
  filename: (req, file, cb) => {
    cb(null, form.username + "." + file.mimetype.split("/")[1]);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
