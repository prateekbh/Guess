const WORD_GUESSED  = 'WORD_GUESSED';
const LOG_TIME = 'LOG_TIME';

function saveTime(word_id, time) {
    fetch('/recordstats',{
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            "word_data": [
                { word_id, time }
            ]
        }),
        credentials: 'same-origin',
    });
}

export {
    WORD_GUESSED,
    LOG_TIME,
    saveTime,
}