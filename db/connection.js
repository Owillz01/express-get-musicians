const path = require('path');
const { Sequelize, Model } = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
    logging: false
});

module.exports = {
    db,
    Sequelize
};
