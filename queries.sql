--view all employees

select employeeinfo.id, employeeinfo.first_name, employeeinfo.last_name, role.title,  department.name, role.salary, manager.first_name
from employee employeeinfo left join employee manager on manager.id = employeeinfo.manager_id join role on employeeinfo.role_id = role.id join department on role.department = department.id;



--add employees

--update employee role

--view all roles
select role.id , role.title, department.name as "department", role.salary from role join department on role.department = department.id;

--add role

--view all departments
select * from department order by name asc;

--add department
