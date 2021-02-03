const express = require("express");
const app = express();
const api = require("./routes/index");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use("/api", api);

app.listen(3001, () => {
  console.log("Connection!");
});
