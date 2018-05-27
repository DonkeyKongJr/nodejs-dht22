const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const readData = require('./read-data.js');
const server = app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/sensordata', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(getSensorData());
});


function getSensorData() {
    var readout = readData();
    return {
        'temp': readout.temperature,
        'humidity': readout.humidity,
        'timestamp': new Date()
    };
}

console.log('Temp is: ' + JSON.stringify(getSensorData()))