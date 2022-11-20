// Importing Required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const socket_io = require("socket.io");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/message");
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
    }).catch((error) => {
        console.log(error.message);
    })

// Allowing Cross Origin Request
app.use(cors());
app.use(express.json())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Staring Server
const server = app.listen(process.env.PORT, () =>
    console.log(`Server Listening on ${process.env.PORT}`));

const io = socket_io(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});
global.onlineUsers = new Map();
io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-recieve", data.msg);
        }
    });
});