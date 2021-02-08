var express = require("express");
var router = express.Router();
var { PythonShell } = require("python-shell");

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

    console.log("results : ", results);
    res.json({
      id: results[0],
      name: results[1],
      department: results[2],
    });
  });
});

module.exports = router;
