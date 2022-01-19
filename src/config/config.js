require('dotenv').config();

const config = {
    port: process.env.PORT,
    apiUserTest: process.env.API_USER_TEST,
    apiOppoTest: process.env.API_OPPORTUNITY_TEST,
    apiSearchTest: process.env.API_SEARCH_OPPORTUNITY,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    privateKey: process.env.PRIVATE_KEY,
};

module.exports = {config};