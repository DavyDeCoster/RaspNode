var SerialPort = require("serialport").SerialPort;
var comm = module.exports = {};
var serialPort;

comm.init = function(){
    /*serialPort = new SerialPort(
        "/dev/ttyACM0",
        {
            baudrate: 9600
        });*/
    console.log('init completed');
};

comm.forward = function(){
    //serialPort.write('0');
    console.log('send ok');
};

comm.left = function(){
    //serialPort.write('-50');
    console.log('send ok');
};

comm.right = function(){
    //serialPort.write('50');
    console.log('send ok');
};

comm.stop = function(){
    //serialPort.write('200');
    console.log('send ok');
};