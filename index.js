const express = require("express");
const mongoose = require("mongoose");

function ConnectMyDB() {
  mongoose.connect(
    "mongodb+srv://root:root@serverlessinstance0.cyunx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  mongoose.connection.on("error", (err) => {
    // console.log("failed to connect db");
    return ("Failed to connect with mongoodb");
  });

  mongoose.connection.on("connected", (connected) => {
    // console.log("connected with mongodb success");
    return ("Connection Established");
  });
}

module.exports.ConnectMyDB = ConnectMyDB;
