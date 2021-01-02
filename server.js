// Require mysql, inquirer and console.table modules //
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTbl = require("console.table");

// Your password
var password = require("./password");
    // Then you can call the password with this code:
    // password.getPassword()

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

    password: password.getPassword(),
    
    // Your database
    database: "Employee_MS_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connection successfully established on thread id#: " + connection.threadId + "\n");
  
  // run the start function after the connection is made to prompt the user
  startQuestions();
});

// create the function startQuestions with inquirer.prompt to sequence through the initial questions. // 
function startQuestions() {
    inquirer.prompt({
        name: "action",
        message: "What would you like to do?",
        type: "list",
        choices: [
            "SHOW all EMPLOYEES",
            "SHOW all DEPARTMENTS",
            "SHOW all ROLES",
            "ADD a NEW EMPLOYEE",
            "ADD a NEW DEPARTMENT",
            "ADD a NEW ROLE",
            "EDIT an EMPLOYEE ROLE",
            "CANCEL"
        ],

    // When the selection is made from the choices, console log the selection and then take action //
    }).then(responses => {
        console.log(responses.action);
        switch (responses.action) {

            // If SHOW all EMPLOYEES is selected, then showEE //
            case "SHOW all EMPLOYEES":
                showEE()        
                break;

            // If SHOW all DEPARTMENTS is selected, then showDP //
            case "SHOW all DEPARTMENTS":
                showDP()
                break;

            // If SHOW all ROLES is selected, then showRL //
            //***********************************************************//
            case "SHOW all ROLES":
                showRL()
                break;
            //****************************************************** */

            // If ADD a NEW EMPLOYEE is selected, then addEE //
            case "ADD a NEW EMPLOYEE":
                addEE()
                break;
       
            // If ADD a NEW DEPARTMENT is selected, then addDP //
            case "ADD a NEW DEPARTMENT":
                addDP()
                break;
    
            // If ADD a NEW ROLE is selected, then addRL //
            case "ADD a NEW ROLE":
                addRL()
                break;
            
            // If EDIT an EMPLOYEE ROLE is selected, then editRL //
            case "EDIT an EMPLOYEE ROLE":
                editRL();
                break;
            
            // If CANCEL is selected, then end the connection. //
            default:
                connection.end()
                break;
        }
    })
};


// Create the function showEE to display the existing employees in the console.table. //
function showEE() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.log("\n" + "EMPLOYEES" + "\n");
        console.table(data);
        startQuestions();
    })
}


// Create the function showDP to display the existing departments in the console.table. //
function showDP() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.log("\n" + "DEPARTMENTS" + "\n");
        console.table(data);
        startQuestions();
    })
}

// Create the function showRL to display the existing roles in the console.table. //
function showRL() {
    connection.query("SELECT * FROM roles", function (err, data) {
        console.log("\n" + "ROLES" + "\n");
        console.table(data);
        startQuestions();
    })
}

// Create the function addEE to add a new employee. //
function addEE() {
    inquirer.prompt([{
            type: "input",
            name: "firstName",
            message: "Enter the employee's first name... "
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter the employee's last name... "
        },
        {
            type: "number",
            name: "roleId",
            message: "Enter the employee's role ID... "
        },
        {
            type: "number",
            name: "managerId",
            message: "Enter the employee manager's ID... "
        }
    ]).then(function(res) {
        if (res.managerId) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err;
            console.log("\n" + "EMPLOYEE successfully added!" + "\n");
            startQuestions();
        })
    } else {
        connection.query('INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)', [res.firstName, res.lastName, res.roleId], function(err, data) {
            if (err) throw err;
            console.log("\n" + "EMPLOYEE successfully added!" + "\n");
            startQuestions();
    })
}
    })
}

// Create the function addDP to add a new department. //
function addDP() {
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "Enter the name of the department you want to add... "
    }, ]).then(function(res) {
        connection.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err;
            console.log("\n" + "DEPARTMENT successfully added!" + "\n");
            startQuestions(); 
        })   
        })
    }

// Create the function addRL to add a new role. //
function addRL() {
    inquirer.prompt([
        {
            message: "Enter role title... ",
            type: "input",
            name: "title"
        }, {
            message: "Enter role salary... ",
            type: "number",
            name: "salary"
        }, {
            message: "Enter role department ID... ",
            type: "number",
            name: "department_id"
        }
    ]).then(function (response) {
        connection.query("INSERT INTO roles (title, salary, department_id) VALUES(?, ?, ?)", [response.title, response.salary, response.department_id],
        function (err, data) {
            if (err) throw err;
            console.log("\n" + "ROLE successfully added!" + "\n");
            startQuestions();
        })
    })
}

// Create the function editRL to edit an employee role. //
function editRL() {
    inquirer.prompt([
        {
            message: "Enter the Last Name of the employee you would like to edit... ",
            type: "input",
            name: "last_name"
        }, {
            message: "Enter the new role ID... ",
            type: "number",
            name: "role_id"
        }
    ]).then(function (response) {
        connection.query("UPDATE employee SET role_id = ? WHERE last_name = ?", [response.role_id, response.last_name], 
        function (err, data) {
            if (err) throw err;
            console.log("\n" + "ROLE succesfully edited! " + "\n")
            startQuestions();
        })
    })
}
