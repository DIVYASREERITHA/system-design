// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");

const app = express();
connectDB();
app.use(express.json());

app.use("/api/messages", require("./routes/messageRoutes"));

const server = http.createServer(app);
const io = new Server(server);

require("./socket/chatSocket")(io);

server.listen(5000, () => console.log("Server running on port 5000"));
