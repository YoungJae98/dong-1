var express = require("express");
var router = express.Router();
var { PythonShell } = require("python-shell");

router.post("/", (req, res) => {
  var options = {
    mode: "text",
    pythonPath: "",
    pythonOptions: ["-u"],
    scriptPath: "./server/",
    args: [req.body.id, req.body.pw],
  };
  PythonShell.run("sejongAPI.py", options, (err, results) => {
    if (err) throw err;

    console.log("results : ", results);
    res.send(results);
  });
});

module.exports = router;
