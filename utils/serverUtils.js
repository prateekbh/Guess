function getEnv(){
    return (process.env.NODE_ENV === 'dev' || !process.env.NODE_ENV) ? 'DEV' : 'PROD';
}


module.exports = {
    getEnv,
};