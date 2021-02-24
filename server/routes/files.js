var express = require("express");
var db = require("../db");
var router = express.Router();
var multer = require("multer");
var fs = require("fs");
var mime = require("mime");
const path = require("path");

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
});

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

router.post("/uploadFile", upload.single("document"), (req, res) => {
  console.log(req.file);
  db.query(
    "insert into files(f_type, f_name, f_date, f_originalname) values (?,?,now(),?)",
    [req.body.f_type, req.body.f_name, req.file.originalname],
    (err, result) => {
      console.log(result);
      res.json({ success: true });
    }
  );
});

router.post("/deleteFile", (req, res) => {
  var filePath = path.join("./src/assets/documents/", req.body.f_originalname);
  fs.unlink(filePath, (err) => {
    if (err) console.log(err);
    else {
      db.query(
        "delete from files where f_id = ?",
        [req.body.id],
        (err, result) => {
          res.json({ success: true });
        }
      );
    }
  });
});

router.post("/getFileData", (req, res) => {
  var file = path.join("./src/assets/documents/", req.body.f_originalname);
  res.download(file);
});

module.exports = router;
