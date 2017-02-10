function getEnv() {
    return (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) ? 'DEV' : 'PROD';
}

function isDev() {
    return getEnv() === 'DEV';
}

function log(stuff) {
    if (isDev) {
        console.log(stuff);
    }
}

module.exports = {
    getEnv,
    isDev,
    log
};