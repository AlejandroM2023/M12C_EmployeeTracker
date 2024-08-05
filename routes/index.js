const router = require('express').Router();

const getData = require('./getData');
const addData = require('./addData');
const updateData = require('./updateData');

router.use('/getData', getData);



module.exports = router;