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





