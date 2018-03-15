require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3005;
const app = express();
const session = require("express-session");
const massive = require("massive");

app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static(__dirname));

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(console.log);

// app.use(session(config.session) );

app.listen(port, function() {
  console.log("Server listening on port", port);
});
