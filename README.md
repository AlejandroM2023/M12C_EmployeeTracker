# M12C_EmployeeTracker

## Description

  In this application the user interacts with an interface in the command line that allows them to view All Employees, Add Employees, Update 
  Employee Role, View All Roles, Add Role, View All Departments, and Add Departments through sql queries done in an express server.

## Video Demonstration

  https://drive.google.com/file/d/1LhmGhWvC81pewDDmec2Xm_H8gx4N7n5Q/view?usp=sharing


## Table of Contents

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)

  [Contact](#tests)


## Installation

  The application must be run with node js and user must install express, inquirer, and pg. 

## Usage

  The user will initialize the application with node npm start to start up the express server and node menu.js to start up the interface. The user must have xpress, inquirer, and pg installed in their working inviroment. The user is then prompted with several options: view All Employees, Add Employees, Update Employee Role, View All Roles, Add Role, View All Departments, and Add Departments. The menu file uses a helper function file that makes fetch/api calls to the routes set up in the express server. The routes are modularized and are devided between read, create, and update sql operations. We query all the information from the database using the information the user supplies. This applicaton shows knoledge of async/synchronus functions, routes, express and sql queries through a library.

## License
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) for more information on the MIT license or other licenses please got to [https://opensource.guide/](https://opensource.guide/)

## Contributing

  N/A

## Tests

  The test run will need to have jest installed and the test files are included in the lib directory.

## Contact

  Please contact me at:\
Github: AlejandroM2023\
 Email: alejandromeza437@gmail.com
  

