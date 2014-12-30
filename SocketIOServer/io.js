/**
 * Created by Davy on 30/12/2014.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var comm = require('./comm');

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

    socket.on('command',function(msg){
        var split = msg.split(':');
        switch(split[1]) {
            case 'left':
                comm.left();
                io.emit('chat message',split[0]+" has pressed the button to go " + split[1]);
                break;
            case 'right':
                comm.right();
                io.emit('chat message',split[0]+" has pressed the button to go " + split[1]);
                break;
            case 'forward':
                comm.forward();
                io.emit('chat message',split[0]+" has pressed the button to go " + split[1]);
                break;
            case 'stop':
                comm.stop();
                io.emit('chat message',split[0]+" has pressed the button to go " + split[1]);
                break;
        }
    });
});

http.listen(4000, function(){
    console.log('listening on *:4000');
});