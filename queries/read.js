const pool = require('./index');

//querie strings
const employeeQ ='select employeeinfo.id, employeeinfo.first_name, employeeinfo.last_name, role.title,  department.name, role.salary, manager.first_name from employee employeeinfo left join employee manager on manager.id = employeeinfo.manager_id join role on employeeinfo.role_id = role.id join department on role.department = department.id;';
const roleQ = 'select role.id , role.title, department.name as "department", role.salary from role join department on role.department = department.id;';
const departmentQ = 'select * from department order by name asc;';
const deparmentIdQ = 'select id from department where name= $1';

async function viewEmployees(){
    const res = await pool.query(employeeQ);
    return res;
}

async function viewRoles(){
    const res = await pool.query(roleQ);
    return res;
}

async function viewDepartments(){
    const res = await pool.query(departmentQ);
    return res;
}

async function getDepartmentId(name) {
    const res = await pool.query(deparmentIdQ,[name]);
    return res;
    
}

module.exports = {viewEmployees, viewRoles, viewDepartments, getDepartmentId};

    