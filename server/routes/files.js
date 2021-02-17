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

router.get("/getFiles", (req, res) => {
  db.query("select * from files", (err, files) => {
    var data = { 1: [], 2: [], 3: [] };
    for (i = 0; i < files.length; i++) {
      if (files[i].f_type == 1) {
        data[1].push(files[i]);
      } else if (files[i].f_type == 2) {
        data[2].push(files[i]);
      } else {
        data[3].push(files[i]);
      }
    }

    res.json(data);
  });
});

router.post("/uploadFile", (req, res) => {
  var reqFiles;
});

module.exports = router;
