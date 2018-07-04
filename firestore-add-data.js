module.exports = function(db, data) {
  console.log("firestore add data called: " + JSON.stringify(data));
  var collectionRef = db.collection("sensordata");

  collectionRef
    .add({
      temperature: data.temp,
      humidity: data.humidity,
      timestamp: data.timestamp
    })
    .then(ref => {
      console.log("Added document with ID: ", ref.id);
    });
};
