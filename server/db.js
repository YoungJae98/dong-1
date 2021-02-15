var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "dong",
  password: "03170317",
  database: "dong",
});

module.exports = db;
