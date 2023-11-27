const { Sequelize } = require('sequelize');
const { ConfigKeys } = require('../utils/configs/configKeys');

const USERNAME = ConfigKeys.MYSQL_USERNAME;
const PASSWORD = ConfigKeys.MYSQL_PASSWORD;
const DB_NAME = ConfigKeys.MYSQL_DATABASE_NAME;

const sequelize = new Sequelize(DB_NAME, USERNAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
});

async function connectToDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log(`An Error has been occurred due to: ${error.message}`);
    }
}

module.exports = { connectToDB, sequelize }
