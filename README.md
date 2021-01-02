# Employee_MS

[![GitHub followers](https://img.shields.io/github/followers/Nmenotti20?label=Follow&style=social)](https://github.com/Nmenotti20)

[![project-JavaScript-language](https://img.shields.io/static/v1?label=javascript&message=100%&color=yellow)](https://github.com/Nmenotti20/Employee_MS.git)

[![license](https://img.shields.io/badge/License-mit-brightgreen.svg)](https://choosealicense.com/licenses/mit/)

##### Version 1.0

## Table of Contents

1. [Project Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Credits](#Credits)
5. [Command to Test](#Test)
6. [License](#License)

### Project Description
In this project, I built a command line application that a small buisinass owner might use to manage their staffing levels. Using the command line, a user is able to view and add departments, roles, and employees as well as edit an existing employee role.
#### User Story

As a Small Business owner
I want to be able to quickly view and manage company departments, roles, and employees
So that I can manage the labor portion of my business.

#### Project Links

[GitHub Repo](https://github.com/Nmenotti20/Employee_MS.git)<br>

![Video Demo](https://drive.google.com/file/d/1bHoRMXGJqaKiXzBAd9aJFdDEpXxwSH03/view)<br>

![Additional Links](./Assets/demo.gif)<br>


### Installation

To install this application, you will need first have a code editor, and and have already downloaded and installed MySQL workbench ![https://www.mysql.com/products/workbench/](https://www.mysql.com/products/workbench/). Next you would clone the repository ![(https://github.com/Nmenotti20/Employee_MS.git)]((https://github.com/Nmenotti20/Employee_MS.git) to your local machine. Open the repo in your code editor.  Next open the "schema.sql" file in MySQL Workbench. 

In the terminal, input "node server.js" to run the program, and follow the instructions given in the terminal by using the up and down arrows to navigate to your desired selection. If you would like to exit the program, please select "CANCEL" or you may use "control" + "c" simultaneously to end the MySQL server connection.  
### Usage

The application should prompt the user to select from one of the following actions to take: "SHOW all EMPLOYEES", "SHOW all DEPARTMENTS", "SHOW all ROLES", "ADD a NEW EMPLOYEE", "ADD a NEW DEPARTMENT", "ADD a NEW ROLE", "EDIT an EMPLOYEE ROLE", and "CANCEL". Upon selection "SHOW all EMPLOYEES", the user will then see displayed in the terminal a table with current employee data, and will be prompted for the next action to take. Upon selecting, "SHOW all DEPARTMENTS", or "SHOW all ROLES", the user will see displayed in the terminal a table for DEPARTMENTS and ROLES respectively. Upon choosing "ADD a NEW EMPLOYEE, DEPARTMENT, or ROLE", the user will be prompted with a series of questions to answer relavant to the data needed to add a new record to that respective table. Upon selecting "EDIT an EMPLOYEE ROLE", the user will be prompted with a series of questions relevant to making a change to an employees role assignment in the employee table. Upon selecting "CANCEL", the user will disconnect from the MySQL server exit the application in the terminal.

### Credits

Special thanks to the following resources that inspired this project:

<ul>
<li> [https://websitesetup.org/mysql-cheat-sheet/]<https://websitesetup.org/mysql-cheat-sheet/>, </li>
<li> [https://www.npmjs.com/package/mysql]<https://www.npmjs.com/package/mysql>, </li>
<li> [https://www.npmjs.com/package/inquirer/v/0.2.3]<https://www.npmjs.com/package/inquirer/v/0.2.3> </li>
<li> [https://www.npmjs.com/package/console.table]<https://www.npmjs.com/package/console.table> </li>
</ul>

### Command to Test

npm run test

### License

This project is [mit](https://choosealicense.com/licenses/mit) licensed.<br>

[![license](https://img.shields.io/badge/License-mit-brightgreen.svg)](https://choosealicense.com/licenses/mit/)

<hr>
<p align='center'><i>
Copyright © 2020 [Nick Menotti]<br>

<p align='center'><i>
Please contact me for additional information:<br>
[GitHub Repo](https://github.com/Nmenotti20/Employee_MS.git)<br>
[Email:](nmenotti@cox.net)</i></p>