const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");


​function appMenu(){
    function createTeam(){
      createEmployee();
      createManager();
      createIntern();
      createEngineer();
    }
    function createEmployee(){
      console.log("Please enter your information");
      inquirer.prompt([
        {
        type: "input",
        name: "employeeName",
        message: "What is your employee's name?",
        validate: answer => {
          if (answer !== ""){
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
          type: "input",
          name: "employeeId",
          message: "What is your employee's id?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        },
        {
          type: "input",
          name: "employeeEmail",
          message: "What is your employee's email?",
          validate: answer => {
            const pass = answer.match(
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          }
        },
        {
          type: "input",
          name: "employeeOfficeNumber",
          message: "What is your employee's office number?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        }
      ]).then(answers => {
        const employee = new Employee(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeOfficeNumber);
        teamMembers.push(employee);
        idArray.push(answers.employeeId);
        createTeam();
      });
    }
    function createIntern(){
      console.log("Please enter your information");
      inquirer.prompt([
        {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
        validate: answer => {
          if (answer !== ""){
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
          type: "input",
          name: "internID",
          message: "What is your intern's id?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email?",
          validate: answer => {
            const pass = answer.match(
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          }
        },
        {
          type: "input",
          name: "internOfficeNumber",
          message: "What is your intern's office number?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        }
      ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internOfficeNumber);
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
    }
    function createEngineer(){
      console.log("Please enter your information");
      inquirer.prompt([
        {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
        validate: answer => {
          if (answer !== ""){
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's id?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email?",
          validate: answer => {
            const pass = answer.match(
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          }
        },
        {
          type: "input",
          name: "engineerOfficeNumber",
          message: "What is your engineer's office number?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        }
      ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerOfficeNumber);
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      });
    }

    function createManager() {
        console.log("Please build your team");
        inquirer.prompt([
          {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
          },
          {
            type: "input",
            name: "managerId",
            message: "What is your manager's id?",
            validate: answer => {
              const pass = answer.match(
                /^[1-9]\d*$/
              );
              if (pass) {
                return true;
              }
              return "Please enter a positive number greater than zero.";
            }
          },
          {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email?",
            validate: answer => {
              const pass = answer.match(
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return "Please enter a valid email address.";
            }
          },
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is your manager's office number?",
            validate: answer => {
              const pass = answer.match(
                /^[1-9]\d*$/
              );
              if (pass) {
                return true;
              }
              return "Please enter a positive number greater than zero.";
            }
          }
        ]).then(answers => {
          const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
          teamMembers.push(manager);
          idArray.push(answers.managerId);
          createTeam();
        });
      }
  
}
appMenu();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
