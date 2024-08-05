

/*fetch('http://localhost:3001/getData/departments').then(async (data) => {

    let jsonData = await data.json();
    console.log(jsonData.rows);

});*/

const inquirer = require("inquirer");



const menuQuestions = [
    {
        message: 'What would you like to do',
        name: 'menu',
        type: 'list',
        choices: ['View All Employess', 'Add Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
        loop: true

    }
]

function menu(){
    inquirer.prompt(menuQuestions).then((choice)=>{
        if(choice.menu !== 'Quit'){
            menu();
        }else{
            console.log('hi');
        }
    });
}



menu();