const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '1013',
    host: 'localhost',
    database: 'employeetracker_db'
}
);

pool.connect();

module.exports = pool;