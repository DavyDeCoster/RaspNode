/**
 * Created by Davy on 30/12/2014.
 */
    var sockets = function(server)
{
    var comm = require('./comm');
    var io = require("socket.io").listen(server);

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
};

module.exports = sockets;