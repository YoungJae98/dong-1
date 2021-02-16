var express = require("express");
var db = require("../db");
var router = express.Router();
var multer = require("multer");
const { requirePropFactory } = require("@material-ui/core");
var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "src/assets/documents/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
var upload = multer({
  storage: storage,
}).single();

router.post("/getFiles", (req, res) => {
  db.query(
    "select * from files where f_id = ?",
    [req.body.id],
    (err, files) => {
      var data = { files: [] };
      for (i = 0; i < files.length; i++) {
        data["files"].push(files[i]);
      }
      res.json(data);
    }
  );
});

router.post("/uploadFile", (req, res) => {
  var reqFiles;
});

module.exports = router;
