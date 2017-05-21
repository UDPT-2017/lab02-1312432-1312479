var pg = require('pg');

var config = require('../../config/database');

var pool = new pg.Pool(config);

module.exports = pool;
