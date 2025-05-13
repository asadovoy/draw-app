const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', socket => {
  console.log('🟢 New connection:', socket.id);

  socket.on('begin', data => {
    socket.broadcast.emit('begin', data);
  });

  socket.on('draw', data => {
    socket.broadcast.emit('draw', data);
  });

  socket.on('clear', () => {
    socket.broadcast.emit('clear');
  });
});

http.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
