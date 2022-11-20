// Importing Required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");
const socket_io = require("socket.io");

// Creating an express app
const app = express();
require("dotenv").config();

// Connecting to Mongo DB 
mongoose.connect(process.env.MongoDBURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Successfully connected to MongoDB");
    }).catch((error) =>{
         console.log(error.message);
    })

// Allowing Cross Origin Request
app.use(cors());
app.use(express.json())

// Staring Server
const server = app.listen(process.env.PORT, ()=> 
                    console.log(`Server Listening on ${process.env.PORT}`));

const io = socket_io(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });

  io.on("connection", (socket_io) => {
    console.log("Hello from server side");
    console.log(socket.id);
  })