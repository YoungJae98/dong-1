var express = require("express");
var router = express.Router();
var { PythonShell } = require("python-shell");
var session = require("express-session");
var db = require("../db");

router.get("/isLoginCheck", (req, res) => {
  if (req.session.isLogin) {
    db.query(
      "select * from user where u_id = ?",
      [req.session.user],
      (err, user) => {
        res.json({
          isLogin: true,
          auth: user[0].u_auth,
        });
      }
    );
  } else {
    res.json({
      isLogin: false,
    });
  }
});

router.post("/login", (req, res) => {
  var options = {
    mode: "text",
    pythonPath: "",
    pythonOptions: ["-u"],
    scriptPath: "./server/",
    args: [req.body.id, req.body.pw],
  };
  if (req.body.id == "20210217" && req.body.pw == "dong1298") {
    res.json({
      isLogin: "success",
      id: "20210217",
      name: "관리자",
      department: "동아리연합회",
      type: 2,
    });
  } else {
    PythonShell.run("sejongAPI.py", options, (err, results) => {
      if (err) throw err;
      if (results[0] === "success") {
        req.session.isLogin = true;
        req.session.user = results[1];
        req.session.save(() => {
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
                  type: 1,
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
                      type: 1,
                    });
                  }
                );
              }
            }
          );
        });
      } else {
        res.json({
          isLogin: results[0],
        });
      }
    });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.send("hello");
  });
});

module.exports = router;
