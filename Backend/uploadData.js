const firestoreService = require("firestore-export-import");

const serviceAccount = require("./serviceAccountKey.json");

const databaseURL = "https://react-project-fe418-default-rtdb.firebaseio.com"

firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService.restore("/data.json");