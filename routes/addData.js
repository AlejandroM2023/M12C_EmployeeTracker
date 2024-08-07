const router = require('express').Router();
const {addRole, addDepartment, addEmployee} = require('../queries/create')

router.post('/role', async(req,res)=>{
    try{
        const response = await addRole(req.body);
        res.json(response);
    }catch(err){
        res.json(err);
    }
})

router.post('/department', async(req,res)=>{
    try{
        const response = await addDepartment(req.body.name);
        res.json(response);
    }catch(err){
        res.json(err);
    }
})
router.post('/employee', async(req,res)=>{
    try{
        const response = await addEmployee(req.body);
        res.json(response);
    }catch(err){
        res.json(err);
    }
})


module.exports = router;