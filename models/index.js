const Band = require('./Band')
const Musician = require('./Musician')

Musician.belongsTo(Band)
Band.hasMany(Musician)

module.exports = {
    Band,
    Musician
};
