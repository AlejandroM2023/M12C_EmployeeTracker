const router = require('express').Router();

const {viewEmployees, viewRoles, viewDepartments} = require('../queries/read');

router.get('/employees',(req,res)=>{
    viewEmployees().then( query => res.json(query));
})

router.get('/roles',(req,res)=>{
    viewRoles().then( query => res.json(query));
})

router.get('/departments',(req,res)=>{
    viewDepartments().then(query => res.json(query));
})

module.exports = router;