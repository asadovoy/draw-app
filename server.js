const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', socket => {
  socket.on('stroke', data => {
    io.emit('stroke', data);
  });

  socket.on('undo', data => {
    io.emit('undo', data);
  });

  socket.on('clear', data => {
    io.emit('clear', data);
  });
});

http.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
