const firebase = require('firebase');

const firebaseConfig = {
  apiKey: 'AIzaSyARpD2ZY6JV0yWtWuVXsHk08u5cSEnNaH8',
  authDomain: 'guess-f5b84.firebaseapp.com',
  messagingSenderId: '892039919403'
};

const app = firebase.initializeApp(firebaseConfig);

let getProfileFromGoogle = function(accessToken, callback) {
  const credential = firebase.auth.GoogleAuthProvider.credential(accessToken);
  firebase.auth().signInWithCredential(credential)
  .then((result) => {
    callback(null, result.displayName, result.email);
  })
  .catch((error) => {
    callback(error);
  });
};
