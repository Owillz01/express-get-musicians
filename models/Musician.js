const { Sequelize, db } = require('../db/connection');

let Musician = db.define('musician', {
    name: Sequelize.STRING,
    instrument : Sequelize.STRING
});

module.exports = Musician;