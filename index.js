const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const readData = require('./read-data.js');
const server = app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.post('/sensordata', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(getSensorData());
});


function getSensorData() {
    var readout = readData();
    return {
        'temp': readout.temperature.toFixed(1),
        'humidity': readout.humidity.toFixed(1)
    };
}

console.log('Temp is: ' + JSON.stringify(getSensorData()))