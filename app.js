const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080;

app.use("/api", require("./routes/api"));
app.get("/", (req, res) => {
  res.redirect("/api/");
});
//Set up default mongoose connection
const mongoDB = process.env.MONGODB;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// start server
app.listen(port);
console.log(`server is running on port ${port}`);
