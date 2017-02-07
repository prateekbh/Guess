const WORD_GUESSED  = 'WORD_GUESSED';
const LOG_TIME = 'LOG_TIME';

async function saveTime(word_id, time, images) {
    const cache = await caches.open("word-images");
    images.forEach(image=>{
        cache.delete(image);
    });
    return fetch('/recordstats',{
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