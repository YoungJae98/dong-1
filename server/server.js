const express = require("express");
const app = express();
const api_account = require("./routes/login");
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/account", api_account);

app.listen(3001, () => {
  console.log("Connection!");
});
