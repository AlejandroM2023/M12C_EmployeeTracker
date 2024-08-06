const inquirer = require("inquirer");
const { viewInfo } = require("./helper");



function menuDepartments(){
    let dList = []
    viewInfo('departments').then( async (rows) =>{
        for(const row of rows){
            dList.push(row.name);
        }
    });
    return dList;
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
    }
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
                menu();
                break;
            case "Update Employee Role":
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
                menu();
                break;
            case "View All Departments":
                console.log('\n')
                viewInfo('departments').then( async (data) => {
                    console.log('\n');
                    console.table(data)});
                menu();
                break;
            case "Add Deprartment":
                menu();
                break;
        }

    });
}

menu();
