var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "dong",
  password: "03170317",
  database: "dong",
});

module.exports = db;
