let isSwRegistered = false;
function requestFirebaseMessaging(callback){
    require.ensure(['firebase/app.js','firebase/auth.js', 'firebase/messaging.js'], (require) => {
        let firebase = require('firebase/app.js');
        require('firebase/messaging.js');
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
            callback(messaging);
        } else if (!isSwRegistered) {
            isSwRegistered = true;
            navigator.serviceWorker.ready.then(registration => {
                messaging.useServiceWorker(window.swReg);
                callback(messaging);
            }).catch(e => {
                throw e;
            });
        } else {
            callback(messaging);
        }
    });
}

export {
    requestFirebaseMessaging,
}