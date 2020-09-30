const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop the db and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Creating a users table" });
});

require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// for 400 range errors
const clientErrorHandler = (err, req, res, next) => {
  if (req.error) {
    console.log("client error is", err);
    res.status(400).json(err);
  } else {
    next(err);
  }
};
app.use(clientErrorHandler);

// for 500 range errors
const serverErrorHandler = (err, req, res, next) => {
  
    console.log("server error is", err);
    res.status(500).json(err);
  
};
app.use(serverErrorHandler);
