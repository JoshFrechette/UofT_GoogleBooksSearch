require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

 if (process.env.NODE_ENV === "production") {
     app.use(express.static("client/build"));
 }

 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

var apiRoutes =  require("./routes/api-routes")(app)

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });