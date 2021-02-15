var mysql = require("mysql");
var db = mysql.createConnection({
  host: "18.217.248.102",
  port: 3306,
  user: "dong",
  password: "03170317",
  database: "dong",
});
module.exports = db;
