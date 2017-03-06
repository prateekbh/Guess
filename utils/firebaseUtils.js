let isSwRegistered = false;
function requestFirebase(callback){
    require.ensure(['firebase/app.js','firebase/auth.js', 'firebase/messaging.js'], (require) => {
        let firebase = require('firebase/app.js');
        firebase.auth = require('firebase/auth.js');
        firebase.messaging = require('firebase/messaging.js');
        try {
            firebase.initializeApp(window.firebaseConfig);
        } catch (e) {
            if (e.code !== 'app/duplicate-app') {
                throw e;
            }
        }
        let messaging = firebase.messaging();
        if (!!window.swReg && !isSwRegistered) {
            isSwRegistered = true;
            messaging.useServiceWorker(window.swReg);
            callback({firebase, messaging});
        } else if (navigator.serviceWorker && !isSwRegistered) {
            isSwRegistered = true;
            navigator.serviceWorker && navigator.serviceWorker.ready.then(registration => {
                messaging.useServiceWorker(window.swReg);
                callback({firebase, messaging});
            }).catch(e => {
                throw e;
            });
        } else {
            callback({firebase, messaging});
        }
    });
}

export {
    requestFirebase,
}