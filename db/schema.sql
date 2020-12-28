-- if there is already a db using the name Employee_MS_db then drop it --
DROP DATABASE IF EXISTS Employee_MS_db;

-- create the new database and name it "Employee_MS_db" --
CREATE DATABASE Employee_MS_db;

-- use the Employee_MS_db --
USE Employee_MS_db;

-- create a table for "department" with "id", "name" --
CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

-- create a table for "role" with "id", "title", "salary" and "department_id" --
CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,

PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department(id)

);

-- create a table for "employee" with "id", "first_name", "last_name", "role_id", "manager_id" 
CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NOT NULL,

PRIMARY KEY (id),

FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (manager_id) REFERENCES role(id)
);



-- select from role --
select * from role