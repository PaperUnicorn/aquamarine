var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:postgres@localhost:5432/Aquamarine')

module.exports = db;