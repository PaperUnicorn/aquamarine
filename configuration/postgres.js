var pgp = require('pg-promise')(/* options */)
var config = require('../configuration/config');

var conn = pgp(`postgres://${config.postgre.username}:${config.postgre.password}@${config.postgre.host}:${config.postgre.port}/${config.postgre.database}`);

module.exports = conn;