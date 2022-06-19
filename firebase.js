const firebase = require('firebase-admin/app');
const firestore = require('firebase-admin/firestore');
const firebaseAuth = require('firebase-admin/auth');
const config = require('./config');

const app = firebase.initializeApp(config.firebaseConfig);
const db = firestore.getFirestore(app);

module.exports = {
  db,
  firebaseAuth,
};
