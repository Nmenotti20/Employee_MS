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
    department_id INT,
    PRIMARY KEY (id)
);

-- create a table for "role" with "id", "title", "salary" and "department_id" --
CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
	salary DECIMAL(10, 2) NOT NULL,
	department_id INT NOT NULL,
	PRIMARY KEY (id),
    
    -- FOREIGN KEY (department_id) REFERENCES department(id) --
);

-- create a table for "employee" with "id", "first_name", "last_name", "role_id", "manager_id" 
CREATE TABLE employee (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	role_id INT NOT NULL,
	manager_id INT NOT NULL,
	PRIMARY KEY (id),
    
    -- FOREIGN KEY (role_id) REFERENCES role(id), --
	-- FOREIGN KEY (manager_id) REFERENCES role(id) --
);


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
-- 
-- INSERT INTO department (name) VALUES ("SALES"),("ENGINEERING"),("FINANCE"),("LEGAL");
-- INSERT INTO role (title, salary, department_id) VALUES ("Salesperson", 50000, 5),("Sales Lead", 60000, 1),("Accountant", 75000, 1);
-- INSERT INTO role ( title, salary , department_id) VALUES("Lawyer", 150000, 1);
-- SELECT * FROM role LEFT JOIN department ON role.department_id = department.id;
-- SELECT * FROM department RIGHT JOIN role ON role.department_id = department.id;
-- SELECT * FROM department FULL JOIN role ON role.department_id = department.id; --

-- EXAMPLE OF JOIN TABELS------------------------------------------------
-- SELECT top_albums.year. top_albums.album, top_albums.position, top5000.song, top5000.artist FROM top_albums, INNER JOIN top5000 ON (top_albums.artist - top5000.artist AND top_albums.year - top5000.year) WHERE (top_albums.artist = "Madonna" AND top5000.artist = "Madonna") ORDER BY top_albums.year; --

-- select * from role