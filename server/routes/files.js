var express = require("express");
var router = express.Router();
var db = require("../db");

router.get("/getFiles", (req, res) => {
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

module.exports = router;
