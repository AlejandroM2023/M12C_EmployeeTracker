DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

\c employeetracker_db

create table department(
    id serial primary key,
    name varchar(30) unique not null
);

create table role(
    id serial primary key,
    title varchar(30) unique not null,
    salary decimal not null,
    department integer not null,
    foreign key (department)
    references department(id)

);

create table employee(
    id serial primary key,
    first_name varchar(30) unique not null,
    last_name varchar(30) not null,
    role_id integer not null,
    manager_id integer default null,
    foreign key (role_id)
    references role(id)

);