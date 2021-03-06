// const express = require("express");
var cors = require('cors');
// const logger = require("morgan");
// const MongoClient = require('mongodb').MongoClient;


const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// const MongoClient = require('mongodb').MongoClient;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const PORT = process.env.PORT || 3001;
app.use(cors())
app.use(routes);

// Connect to the Mongo DB database
// const url = process.env.MONGODB_URI ||'mongodb://localhost:googlebooks';
// MongoClient.connect(url, { useUnifiedTopology: true })
//   .then(client => {
//    console.log('Connected to Database');
//   })


  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }


app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});