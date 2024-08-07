const pool = require('./index');
const {getRoleId, getEmployeeId} = require('../queries/read');

const uerQ = 'update employee set role_id = $1 where id= $2';

async function updateEmployeeRole(params) {
    const employeeId = await getEmployeeId(params.first_name, params.last_name);
    const roleId = await getRoleId(params.role);
    const p = [roleId.rows[0].id,employeeId.rows[0].id]
    const res = await pool.query(uerQ,p);
    return res;
}


module.exports = {updateEmployeeRole}