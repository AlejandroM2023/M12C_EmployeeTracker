const viewInfo = (table) =>
  fetch(`http://localhost:3001/getData/${table}`).then(async (data) => {
  
      let info = await data.json();
      return info.rows;
  });

const addRole = (params) =>{
    const obj = {
        title: params[0],
        salary: parseFloat(params[1]),
        department: params[2]
    }
    fetch(`http://localhost:3001/addData/role`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
}   

const addDepartment = (deparmentName) =>{
    const obj = {
        name: deparmentName
    }
    fetch(`http://localhost:3001/addData/department`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
}   

const addEmployee = (params) =>{
    const obj = {
        first_name: params[0],
        last_name: params[1],
        role: params[2],
        manager: params[3],
    }
    fetch(`http://localhost:3001/addData/employee`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
}   
const updateEmployeeRole = (params) =>{
    const obj = {
        first_name: params[0],
        last_name: params[1],
        role: params[2]
    }
    fetch(`http://localhost:3001/updateData/employeeRole`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    });
}   


module.exports = {viewInfo, addRole, addDepartment, addEmployee, updateEmployeeRole}


