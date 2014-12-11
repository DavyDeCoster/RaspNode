/*
var net = require('net');

var SerialPort = require("serialport").SerialPort;

var serialPort = new SerialPort("/dev/ttyACM0", {
    baudrate: 9600
});

net.createServer(function(socket)
{
    socket.name = socket.remoteAddress + ":" + socket.remotePort;

    socket.on('data', function (data)
    {
        var sSplit = data.toString().split('/');
        var writeInt;
        console.log(sSplit[0]);
        var recievedValue=parseInt(sSplit[0]);
        if(recievedValue<10 && recievedValue>-10)
        {
            writeInt="1";
        }
        if(sSplit[0]>10 && sSplit[0]<32.5)
        {
            writeInt="2";
        }
        if(sSplit[0]>32.5 && sSplit[0]<55)
        {
            writeInt="3";
        }
        if(sSplit[0]>55 && sSplit[0]<77.5)
        {
            writeInt="4";
        }
        if(sSplit[0]>77.5 && sSplit[0]<=100)
        {
            writeInt="5";
        }

        if(sSplit[0]<-10 && sSplit[0]>-32.5)
        {
            writeInt="6";
        }
        if(sSplit[0]<-32.5 && sSplit[0]>-55)
        {
            writeInt="7";
        }
        if(sSplit[0]<-55 && sSplit[0]>-77.5)
        {
            writeInt="8";
        }
        if(sSplit[0]<-77.5 && sSplit[0]>=-100)
        {
            writeInt="9";
        }

        serialPort.write(writeInt, function(err, results) {
            console.log('err ' + err);
            console.log('results ' + results);
        });
    });
}).listen(3000);
serialPort.on("open", function () {
    console.log('open');
});
console.log("running at port 3000");*/
