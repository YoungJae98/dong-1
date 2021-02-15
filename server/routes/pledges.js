var express = require("express");
var router = express.Router();
var db = require("../db");

router.get("/getPledge", (req, res) => {
  db.query("select * from pledge", (err, pledges) => {
    var data = {
      1: [],
      2: [],
      3: [],
      4: [],
    };
    for (i = 0; i < pledges.length; i++) {
      if (pledges[i]["p_type"] == 1) {
        data[1].push(pledges[i]);
      } else if (pledges[i]["p_type"] == 2) {
        data[2].push(pledges[i]);
      } else if (pledges[i]["p_type"] == 3) {
        data[3].push(pledges[i]);
      } else {
        data[4].push(pledges[i]);
      }
    }
    res.json(data);
  });
});

router.get("/setPledge", (req, res) => {
  db.query(
    "update pledges set p_status = 1 where p_id = ?",
    [req.body.p_id],
    (err, results) => {
      res.json({
        success: true,
      });
    }
  );
});

module.exports = router;
