const router = require('express').Router();
const {addRole} = require('../queries/create')

router.post('/role', (req,res)=>{
    try{
        res.send(addRole(req.body));
    }catch(err){
        res.send('error');
    }
})


module.exports = router;