const SET_USER_DETAILS='SET_USER_DETAILS';

function loginUser({authToken, name}) {
    let body = {};
    if (authToken) {
        body.auth_token = authToken;
    } else if (name) {
        body.name = name;
    }
    return dispatchEvent => {
        fetch('/login',{
            method: 'POST',
            body: JSON.stringify(body),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            credentials: 'same-origin',
        })
        .then(data => data.json())
        .then(res => {
            dispatchEvent({
                type: SET_USER_DETAILS,
                data: res.user,
            });
        })
        .catch(err => {
            console.log(err);
        })
    }
}

function sendUserToken({token}) {
    return fetch('https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/hints', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'key=AIzaSyAMGNUInbu8eno5eq1hqyTnEC1QLWMTkGE'
        })
    }).then(response => {
        if (response.status < 200 || response.status >= 400) {
        throw 'Error subscribing to topic: '+response.status + ' - ' + response.text();
        }
        console.log('Subscribed to "'+topic+'"');
    }).catch(error => {
        console.error(error);
    })
    // fetch('/registermessagingtoken', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         token,
    //     }),
    //     headers: new Headers({
    //         'Content-Type': 'application/json',
    //     }),
    //     credentials: 'same-origin',
    // });
}
export {
    SET_USER_DETAILS,
    loginUser,
    sendUserToken,
}