const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const readData = require('./read-data.js');
const firestoreInit = require('./firestore-init');
const firestoreAddData = require('./firestore-add-data');

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
    return convertSensorDataToJson(readout);
}

let db = firestoreInit();

// initial call
firestoreAddData(db, convertSensorDataToJson(readData()));

setInterval(function(){
    firestoreAddData(db, convertSensorDataToJson(readData()));
},5000);

function convertSensorDataToJson(sensorData){
    return {
        'temp': sensorData.temperature,
        'humidity': sensorData.humidity,
        'timestamp': new Date()
    };
}
