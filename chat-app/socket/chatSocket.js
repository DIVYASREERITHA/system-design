// socket/chatSocket.js
const Message = require("../models/Message");

module.exports = (io) => {
  io.on("connection", (socket) => {

    socket.on("joinChat", (chatId) => {
      socket.join(chatId);
    });

    socket.on("sendMessage", async (data) => {
      const msg = await Message.create(data);
      io.to(data.chatId).emit("receiveMessage", msg);
    });

  });
};
