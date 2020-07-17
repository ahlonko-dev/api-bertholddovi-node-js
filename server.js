require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("_helpers/jwt");
const errorHandler = require("_helpers/error-handler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api pp

// api routes
app.use("/users", require("./users/users.controller"));
app.use("/experiences", require("./experiences/experiences.controller"));
app.use("/formations", require("./formations/formation.controller"));
app.use("/competences", require("./competences/competences.controller"));
app.use("/informations", require("./informations/information.controller"));
app.use("/languages", require("./languages/language.controller"));
app.use("/hobbies", require("./hobbies/hobbie.controller"));

app.use(jwt());
// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === "production" ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log("Server listening on port " + port);
});
