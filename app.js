const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    socket.on('message', (data) => {
        io.emit('message', data);
    });
});

http.listen(PORT, () => {
    console.log('port number : ' + PORT);
});
