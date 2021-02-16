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
router.post("/showCommunity", (req, res) => {
  db.query(
    "select * from community where c_id = ?",
    [req.body.id],
    (err1, commun) => {
      db.query(
        "select * from comments where co_community = ?",
        [req.body.id],
        (err2, comments) => {
          var data = { community: {}, comments: [] };
          for (i = 0; i < comments.length; i++) {
            data["comments"].push(comments[i]);
          }
          data["community"] = commun[0];
          res.json(data);
        }
      );
    }
  );
});
router.post("/writeComments", (req, res) => {
  db.query(
    "select * from community where c_id = ?",
    [req.body.id],
    (err1, commun) => {
      db.query(
        "insert into comments(co_community, co_user, co_body, co_date) values(? ,? ,? , now())",
        [req.body.id, req.session.user, req.body.body],
        (err2, results) => {
          res.json({
            success: true,
          });
        }
      );
    }
  );
  console.log(req.session);
});
router.post("/writeCommunity", (req, res) => {
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
              [title, body, req.body.type, user[0].u_name],
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
router.get("/getCommunityByUser", (req, res) => {
  db.query(
    "select * from community where c_u_id = ?",
    [req.session.user],
    (err, communs) => {
      var data = { community: [] };
      for (i = 0; i < communs.length; i++) {
        data["community"].push(communs[i]);
      }
      res.json(data);
    }
  );
});
router.get("/getCommentByUser", (req, res) => {
  db.query(
    "select * from comments where co_u_id = ?",
    [req.session.user],
    (err, comments) => {
      var data = { comments: [] };
      for (i = 0; i < comments.length; i++) {
        data["comments"].push(comments[i]);
      }
      res.json(data);
    }
  );
});

module.exports = router;
