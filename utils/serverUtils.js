function getEnv(){
    return (process.env.ENV_VARIABLE === 'dev' || !process.env.ENV_VARIABLE) ? 'DEV' : 'PROD';
}


module.exports = {
    getEnv,
};