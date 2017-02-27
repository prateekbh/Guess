module.exports = {
  // Collection names
  gamesCollection: 'games',
  userCollection: 'users',

  // API config
  mongoDbUrl: 'mongodb://localhost:27017/guess',
  WORD_COUNT: 25,
  SEND_ENCRYPTED_WORD: true,
  SAVEWORD_KEY_VALIDATION: false,
  WHITELISTED_ADMINS: ['93arpit@gmail.com', 'prateek89born@gmail.com'],

  // API keys
  COOKIE_NAME: 'userid',
  AUTH_TOKEN: 'auth_token',
  NAME: 'name',
};
