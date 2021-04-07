dconst fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

let employeeID = 1;
let employeeArray = [];

function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Managers name ? ",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the manager's email address?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
      },
    ])
    .then(function (response) {
      let name = response.managerName;
      let email = response.managerEmail;
      let officeNumber = response.officeNumber;
      let manager = new Manager(
        name,

        email,
        officeNumber
      );

      employeeArray.push(manager);

      employeeID++;

      console.log(`
       ----------------------------
         Now we'll collect information from you about your other team members
       -----------------------------
         `);

      addEmployees();
    });
}

function addEmployees() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is the role of the employee you would like to add ?",
        choices: ["Engineer", "Intern"],
        name: "employeeType",
      },
      {
        type: "input",
        message: "What is the employee's name?",
        name: "employeeName",
      },
      {
        type: "input",
        message: "What is the employee's email address?",
        name: "employeeEmail",
      },
    ])
    .then(function (response) {
      let employeeType = response.employeeType;
      let employeeName = response.employeeName;
      let employeeEmail = response.employeeEmail;

      if (employeeType === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the employee's GitHub username?",
              name: "github",
            },
            {
              type: "list",
              message: "Do you have more employees you'd like to add?",
              choices: ["Yes", "No"],
              name: "addEmployees",
            },
          ])
          .then(function (response) {
            let employeeGitHub = response.github;

            let engineer = new Engineer(
              employeeName,
              employeeID,
              employeeEmail,
              employeeGitHub
            );

            employeeArray.push(engineer);
            employeeID++;

            if (response.addEmployees === "Yes") {
              addEmployees();
            } else {
              renderHtml();
              return;
            }
          });
      } else {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Where does the intern go to school?",
              name: "internSchool",
            },
            {
              type: "list",
              message: "Do you have more employees you'd like to add?",
              choices: ["Yes", "No"],
              name: "addEmployees",
            },
          ])
          .then(function (response) {
            let employeeSchool = response.internSchool;

            let intern = new Intern(
              employeeName,
              employeeID,
              employeeEmail,
              employeeSchool
            );

            employeeArray.push(intern);

            employeeID++;

            if (response.addEmployees === "Yes") {
              addEmployees();
            } else {
              renderHtml();
              return;
            }
          });
      }
    });
  // console.log(employeeArray);
}

function renderHtml() {
  let employeeCards = "";

  employeeArray.forEach((item) => {
    let cardString = item.createCard();
    employeeCards += cardString;
  });

  let fullHTML = `
   <!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
         rel="stylesheet"
         href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
         integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
         crossorigin="anonymous"
      />

      <script
      src="https://kit.fontawesome.com/ab3fd93a87.js"
      crossorigin="anonymous"
   ></script>
     
      <title>My Employee Team</title>
   </head>
   <body>
      <div
         class="container-fluid bg-danger text-center d-flex align-items-center justify-content-center"
         style="height: 20vh"
      >
         <div class="h1 text-white" style="display: inline-block;">
            My Team
         </div>
      </div>
      <div class="container mt-5">
         <!-- start of card group -->
         <div class="card-deck d-inline-flex justify-content-center">
            ${employeeCards}
         </div>
         <!-- end of card group -->
      </div>
   </body>
</html>
   `;

  fs.writeFile("./html/teamPage.html", fullHTML, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

promptManager();
