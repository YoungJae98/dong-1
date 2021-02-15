var express = require("express");
var router = express.Router();
var sanitizeHtml = require("sanitize-html");
var db = require("../db");

router.get("/getCommunity", (req, res) => {
  db.query("select * from community", (err, communs) => {
    var data = { 1: [], 2: [] };

    for (i = 0; i < communs.length; i++) {
      if (communs[i].c_type == 1) {
        data[1].push(communs[i]);
      } else {
        data[2].push(communs[i]);
      }
    }

    res.json(data);
  });
});
router.get("/showSuggestion", (req, res) => {});
router.get("/showPetition", (req, res) => {});
router.post("/writeCoummunity", (req, res) => {
  var title = sanitizeHtml(req.body.title);
  var body = sanitizeHtml(req.body.body);
  db.query(
    "select * from user where u_id = ?",
    [req.session.user],
    (err1, user) => {
      db.query(
        "select * from community where c_title = ?",
        [title],
        (err2, suggest) => {
          if (suggest.length) {
            res.json({
              success: false,
            });
          } else {
            db.query(
              "insert into community(c_title, c_body, c_type, c_date, c_user) values(?, ?, ?, now(), ?)",
              [title, body, req.body.type, user[0].u_id],
              (err3, results) => {
                res.json({
                  success: true,
                });
              }
            );
          }
        }
      );
    }
  );
});

module.exports = router;
