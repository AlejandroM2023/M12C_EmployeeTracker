const pool = require('./index');
const {getDepartmentId, getRoleId, getManagerId} = require('./read')

//querie strings

const roleQ = 'insert into role(title, salary, department) values($1,$2,$3)';
const deparmentQ = 'insert into department(name) values($1)'
const employeeQ = 'insert into employee(first_name, last_name, role_id, manager_id) values($1,$2,$3,$4)'

async function addRole(params){
    try{
        const p = [params.title,params.salary,params.department];

        const departmentId = await getDepartmentId(params.department);

        p[2] = departmentId.rows[0].id;

        await pool.query(roleQ,p);

        return { message: 'role added succefully'};

    }
    catch (err){
        return {message: 'there was an error'};
    }
}

async function addDepartment(name){
    try{
        await pool.query(deparmentQ,[name]);
        return { message: 'role added succefully'};
    }
    catch (err){
        return {message: 'there was an error'};
    }
}

async function addEmployee(params){
    const p = [params.first_name, params.last_name, params.role, params.manager];

    const roleId = await getRoleId(params.role);
    p[2] = roleId.rows[0].id;

    const managerId = await getManagerId(params.manager);
    p[3] = managerId.rows[0].id;
    
    try{
        await pool.query(employeeQ,p);
        return { message: 'role added succefully'};
    }
    catch (err){
        return {message: 'there was an error'};
    }
}

module.exports = {addRole, addDepartment, addEmployee}

