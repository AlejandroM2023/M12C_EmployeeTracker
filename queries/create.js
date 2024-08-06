const pool = require('./index');
const {getDepartmentId} = require('./read')

//querie strings

const roleQ = 'insert into role(title, salary, department) values($1,$2,$3)';

function addRole(params){
    const p = [params.title,params.salary,params.department];

    getDepartmentId(params.department).then(async (data) => p[2] = data.rows[0].id);
    
    pool.query(roleQ, p, (err,result) => {
        if(err){
            return JSON.stringify(err.message);
        }else{
            console.log('Role added succesfully');
        }
    })
}

module.exports = {addRole}

