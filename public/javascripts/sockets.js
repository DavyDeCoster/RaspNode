/**
 * Created by Davy on 29/12/2014.
 */
var socket = io('localhost:3000');

$('form').submit(function() {
    var message = $('#m');
    socket.emit('chat message', $("#username").val()+": "+message.val());
    message.val('');
    return false;
});

function command(user,command){
    socket.emit('command',user+':'+command);
}

socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
});