const router = require('express').Router();
const {updateEmployeeRole} = require('../queries/update');

router.put('/employeeRole', async (req,res) => {
    updateEmployeeRole(req.body).then(query => res.json(query));
})

module.exports = router;