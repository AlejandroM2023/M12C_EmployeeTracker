const express = require('express');
const {Pool} = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();



app.use(express.urlencoded({extended: false}));
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    password: '1013',
    host: 'localhost',
    database: 'employeetracker_db'
},
conosole.log()
);

pool.connect();



