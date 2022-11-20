// Importing Required modules
const express = require("express");
const mongoose = require("mongoose");

// Creating an express app
const app = express();
require("dotenv").config();

// Staring Server
app.listen(process.env.PORT, ()=> 
                    console.log(`Server Listening on ${process.env.PORT}`));
