const dotenv = require('dotenv');

dotenv.config();

const ConfigKeys = {
    PORT: process.env.PORT,
    MYSQL_USERNAME: process.env.MYSQL_USERNAME,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE_NAME: process.env.MYSQL_DATABASE_NAME
};

module.exports = {
    ConfigKeys
};
