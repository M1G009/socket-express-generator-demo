const { io } = require("../app");

const socketApi = () =>
 io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
   //Socket implementation
});
module.exports = socketApi;