const socket  = require("socket.io");

module.exports = (server) => {
  const io = socket(server);
  io.on('connection', (socket) => {
    socket.on('deploy', (data) => {
      io.emit('news', data);
    });
    socket.on('disconnect', () => {
      io.emit('user disconnected');
    });
  });
};