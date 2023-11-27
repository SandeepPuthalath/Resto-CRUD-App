const { DataTypes } = require('sequelize');
const { sequelize } = require('../connection');


// Define the Restaurant model
const Restaurant = sequelize.define('Restaurant', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async () => {
    try {
        await sequelize.sync();
        console.log('Restaurant model synchronized successfully');
    } catch (error) {
        console.error('Error synchronizing model:', error);
    }
})();

module.exports = Restaurant;
