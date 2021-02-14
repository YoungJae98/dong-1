const express = require("express");
const app = express();
const api_account = require("./routes/login");
const api_community = require("./routes/community");
const api_files = require("./routes/files");
const api_pledges = require("./routes/pledges");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(
  session({
    secret: "akdlsjai!@^$(128y1asfkjas",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/account", api_account);
app.use("/api/community", api_community);
app.use("/api/files", api_files);
app.use("/api/pledges", api_pledges);

app.listen(3001, () => {
  console.log("Connection!");
});
