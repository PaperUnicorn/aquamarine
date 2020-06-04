var pgp = require('pg-promise')(/* options */)
var conn = pgp('postgres://postgres:postgres@localhost:5432/Aquamarine')

module.exports = conn;