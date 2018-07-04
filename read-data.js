module.exports = function () {
    var sensorLib = require('node-dht-sensor');
    var sensorType = 22; // 11 for DHT11, 22 for DHT22 and AM2302
    var sensorPin = 4;  // The GPIO pin number for sensor signal

    return sensorLib.readSpec(sensorType, sensorPin);
}