const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;
var log = [];

app.use('/', express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    log.forEach((data) => {
        io.to(socket.id).emit('log', data);
    });
    socket.on('message', (data) => {
        log.push(data);
        io.to(socket.id).emit('mymessage', data);
        socket.broadcast.emit('broadcast', data);
    });
});

http.listen(PORT, () => {
    console.log('port number : ' + PORT);
});