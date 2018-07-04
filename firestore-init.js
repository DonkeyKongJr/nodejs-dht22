module.exports = function () {
    const admin = require('firebase-admin');
    var serviceAccount = require('./firebase-admin.config.json');


    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    
    return admin.firestore(); // db
}