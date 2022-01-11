require('dotenv').config();

const config = {
    port: process.env.PORT,
    apiUserTest: process.env.API_USER_TEST,
    apiOppoTest: process.env.API_OPPORTUNITY_TEST,
//   apiSearchTest: process.env.API_SEARCH_OPPORTUNITY,
};

module.exports = {config};