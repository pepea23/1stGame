var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3002);

io.on('connection', function (socket) {
    console.log(socket)
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
    // console.log('user connect');
});