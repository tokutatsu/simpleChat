const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/public'));
app.use('/', require('./routes/index.js'));

io.on('connection', (socket) => {
    let room = '';

    socket.on('clientJoin', (data) => {
        room = data;
        socket.join(room);
    });

    socket.on('message', (data) => {
        io.to(socket.id).emit('mymessage', data);
        socket.broadcast.to(room).emit('broadcast', data);
    });

    socket.on('disconnect', () => {
        console.log('切断');
    });
});

http.listen(PORT, () => {
    console.log('port number : ' + PORT);
});