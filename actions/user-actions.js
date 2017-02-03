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
export {
    SET_USER_DETAILS,
    loginUser,
}