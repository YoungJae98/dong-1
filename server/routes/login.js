var express = require("express");
var router = express.Router();
var { PythonShell } = require("python-shell");
var session = require("express-session");
var FileStore = require("session-file-store")(session);
var db = require("../db");
db.connect();

router.use(
  session({
    secret: "akdlsjai!@^$(128y1asfkjas",
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
  })
);

router.post("/isLoginCheck", (req, res) => {
  res.send("hello");
});

router.post("/login", (req, res) => {
  var options = {
    mode: "text",
    pythonPath: "",
    pythonOptions: ["-u"],
    scriptPath: "./server/",
    args: [req.body.id, req.body.pw],
  };
  PythonShell.run("sejongAPI.py", options, (err, results) => {
    if (err) throw err;
    if (results[0] === "success") {
      req.session.is_logined = true;
      req.session.user = results[1];
      req.session.save();
      db.query(
        "select * from user where u_id = ?",
        [results[1]],
        (logErr, users) => {
          if (users.length) {
            res.json({
              isLogin: results[0],
              id: results[1],
              name: results[2],
              department: results[3],
            });
          } else {
            db.query(
              "insert into user(u_id, u_name, u_department) values(?,?,?)",
              [results[1], results[2], results[3]],
              (regErr, regRes) => {
                res.json({
                  isLogin: results[0],
                  id: results[1],
                  name: results[2],
                  department: results[3],
                });
              }
            );
          }
        }
      );
    } else {
      res.json({
        isLogin: results[0],
      });
    }
  });
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.send("hello");
  });
});

module.exports = router;
