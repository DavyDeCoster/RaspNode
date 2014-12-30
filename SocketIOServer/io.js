/**
 * Created by Davy on 30/12/2014.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(4000, function(){
    console.log('listening on *:4000');
});