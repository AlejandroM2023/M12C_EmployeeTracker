const inquirer = require("inquirer");
const { viewInfo, addRole, addDepartment, addEmployee, updateEmployeeRole} = require("./helper");



function menuDepartments(){
    let dList = []
    viewInfo('departments').then( async (rows) =>{
        for(const row of rows){
            dList.push(row);
        }
    });
    return dList;
}

function menuRoles(){
    let rList = []
    viewInfo('roles').then( async (rows) =>{
        for(const row of rows){
            rList.push(row.title);
        }
    });
    return rList;
}
function menuManagers(){
    let mList = []
    viewInfo('employees').then( async (rows) =>{
        for(const row of rows){
            if(row.manager == null)
                mList.push(row.first_name);
        }
    });
    mList.push('none');
    return mList;
}

function menuEmployee(){
    let eList = []
    viewInfo('employees').then( async (rows) =>{
        for(const row of rows){
            eList.push(`${row.first_name} ${row.last_name}`);
        }
    });
    return eList;
}


const menuQuestions = [
    {
        message: 'What would you like to do',
        name: 'menu',
        type: 'list',
        choices: ['View All Employees', 'Add Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
        loop: true

    },
    {
        message: 'What is the name of the department',
        name: 'departmentName',
        when: (answers) => answers.menu === 'Add Department'
    },
    {
        message: 'What is the name of the role',
        name: 'roleName',
        when: (answers) => answers.menu === 'Add Role'
    },
    {
        message: 'What is the salary of the role',
        name: 'roleSalary',
        when: (answers) => answers.menu === 'Add Role'
    },
    {
        message: 'Which deparment does the role belong to',
        name: 'roleDepartment',
        type: 'list',
        when: (answers) => answers.menu === 'Add Role',
        choices: menuDepartments()
    },
    {
        message: 'What is the employee\'s first name',
        name: 'employeeFirst',
        when: (answers) => answers.menu === 'Add Employees'
    },
    {
        message: 'What is the employee\'s last name',
        name: 'employeeLast',
        when: (answers) => answers.menu === 'Add Employees'
    },
    {
        message: 'What is the employee\'s role',
        name: 'employeeRole',
        type: 'list',
        when: (answers) => answers.menu === 'Add Employees',
        choices: menuRoles()
    },
    {
        message: 'Who is the employee\'s manager',
        name: 'employeeManager',
        type: 'list',
        when: (answers) => answers.menu === 'Add Employees',
        choices: menuManagers()
    },
    {
        message: 'Which employee\'s role do you want to update',
        name: 'updateEmployee',
        type: 'list',
        when: (answers) => answers.menu === 'Update Employee Role',
        choices: menuEmployee()
    },
    {
        message: 'Which role do you want to assign the selected employee',
        name: 'roleEmployee',
        type: 'list',
        when: (answers) => answers.menu === 'Update Employee Role',
        choices: menuRoles()
    },
    
]





function menu(){
    inquirer.prompt(menuQuestions).then((choice)=>{
        switch(choice.menu){
            case "View All Employees":
                viewInfo('employees').then( async (data) => {
                    console.log('\n');
                    console.table(data)});
                menu();
                break;
            case "Add Employees":
                addEmployee([choice.employeeFirst,choice.employeeLast,choice.employeeRole,choice.employeeManager]);
                menu();
                break;
            case "Update Employee Role":
                updateEmployeeRole([choice.updateEmployee.split(' ')[0], choice.updateEmployee.split(' ')[1], choice.roleEmployee ])
                menu();
                break;
            case "View All Roles":
                console.log('\n')
                viewInfo('roles').then( async (data) => {
                    console.log('\n');
                    console.table(data)});
                menu();
                break;
            case "Add Role":
                addRole([choice.roleName, choice.roleSalary, choice.roleDepartment]);
                menu();
                break;
            case "View All Departments":
                console.log('\n')
                viewInfo('departments').then( async (data) => {
                    console.log('\n');
                    console.table(data)});
                menu();
                break;
            case "Add Department":
                addDepartment(choice.departmentName);
                menu();
                break;
        }

    });
}

menu();