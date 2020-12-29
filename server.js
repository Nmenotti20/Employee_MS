// Require mysql, inquirer and console.table modules //
var mysql = require("mysql");
var inquirer = require("inquirer");
// var consoleTable = require("console.table");

// Your password
// var password = require("./password");
//     // Then you can call the password with this code:
//     password.getPassword()

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

    password: "",
    
    // Your database
    database: "Employee_MS_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;

  // run the start function after the connection is made to prompt the user
  startQuestions();
});

// create the function startQuestions with inquirer.prompt to sequence through the initial questions. // 
function startQuestions() {
    inquirer.prompt({
        name: "action",
        message: "what would you like to do?",
        type: "list",
        choices: [
            "SHOW all EMPLOYEES",
            "SHOW all DEPARTMENTS",
            "ADD a NEW EMPLOYEE",
            "ADD a NEW DEPARTMENT",
            "ADD a NEW ROLE",
            "EDIT an EMPLOYEE ROLE",
            "CANCEL"
        ],

    // When the selection is made from the choices, console log the selection and then take action //
    }).then(responses => {
        console.log(responses.selection);
        switch (responses.selection) {

            // If SHOW all EMPLOYEES is selected, then showEE //
            case "SHOW all EMPLOYEES":
                showEE()        
                break;

            // If SHOW all DEPARTMENTS is selected, then showDP //
            case "SHOW all DEPARTMENTS":
                showDP()
                break;
            
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
        console.table(data);
        startQuestions();
    })
}


// Create the function showDP to display the existing departments in the console.table. //
function showDP() {
    connection.query("SELECT * FROM department", function (err, data) {
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
            console.table("Successfully added!");
            askQuestions();
        })
    } else {
        connection.query('INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)', [res.firstName, res.lastName, res.roleId], function(err, data) {
            if (err) throw err;
            console.table("Successful update!");
            askQuestions();
    })
}
    })
}

// Create the function addDP to add a new department. //



// Create the function addRL to add a new role. //



// Create the function editRL to edit an employee role. //


