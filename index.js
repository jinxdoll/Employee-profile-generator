// const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "teamPage.html");

const html = require("./lib/html");

const Choices = require("inquirer/lib/objects/choices");

let employeeArray = [];
let employeeID = 1;

const appStartQuestions = {
  type: "list",
  message: `
                Welcome to the Employee Profile Generator.
                Do you wish to continue with this application?`,
  choices: ["Yes", "No"],
  name: "startQuestions",
};

const promptManager = [
  {
    message: "What is the Manager's name ?",
    name: "managerName",
  },
  {
    message: "What is the Manager's id number ?",
    name: "managerId",
  },
  {
    message: "What is the Manager's email ?",
    name: "managerEmail",
  },
  {
    message: "What is the manager's office number ?",
    name: "managerOfficeNumber",
  },
];

const promptEngineer = [
  {
    message: "What is the Engineer's name ?",
    name: "engineerName",
  },
  {
    message: "What is the Engineer's id number ?",
    name: "engineerId",
  },
  {
    message: "What is the Engineer's email ?",
    name: "engineerEmail",
  },
  {
    message: "What is the Engineer's Github username ?",
    name: "engineerGithub",
  },
];

const promptIntern = [
  {
    message: "What is the Intern's name ?",
    name: "internName",
  },
  {
    message: "What is the Intern's id number ?",
    name: "internId",
  },
  {
    message: "What is the Intern's email ?",
    name: "internEmail",
  },
  {
    message:
      "What is the name of the school the intern attended ? If not applicable, enter 'n/a'. ",
    name: "internSchool",
  },
];

const promptAddEmployee = [
  {
    type: "input",
    message:
      "Would you like to add another employee to this team ? Choose 'Yes' to add another member. Choose 'No' to finish.",
    choices: ["Yes", "No"],
    name: "addEmployee",
  },
];

const promptEmployeeType = [
  {
    type: "list",
    name: "employeeType",
    message:
      "Please choose the employee's role type you would like to add. Choose from: Engineer or Intern. Or choose EXIT",
    choices: ["Engineer", "Intern", "EXIT"],
  },
];

function inquirerStart() {
  inquirer.prompt(appStartQuestions).then((response) => {
    if (response.startQuestions === "Yes") {
      console.log("Please enter the Managers' information.");
      handleManager();
    } else {
      console.log("Exiting Application");
    }
  });
}

function handleManager() {
  inquirer.prompt(promptManager).then((response) => {
    let name = response.managerName;
    let id = response.managerId;
    let email = response.managerEmail;
    let officeNumber = response.officeNumber;

    const manager = new Manager(name, id, email, officeNumber);
    employeeArray.push(manager);
    employeeID++;
    console.log("Next we'll collect information on the other team members.");
    nextEmployee();
  });
}

function nextEmployee() {
  inquirer.prompt(promptAddEmployee).then((choices) => {
    if (choices.addEmployee === "Yes") {
      console.log("response from line 138:");
      inquirer.prompt(promptEmployeeType).then((choices) => {
        switch (choices.employeeType) {
          case "Engineer":
            handleEngineer();
            break;
          case "Intern":
            handleIntern();
            break;
          case "Exit":
            console.log("Team is being built line 147");
            renderHtml();
            return;
        }

        if (choices.addEmployee === "Yes") {
          console.log("Team is being created (line 152)");
          renderHtml();
          return;
        }
      });
    }
  });
}

function handleEngineer() {
  inquirer.prompt(promptEngineer).then((response) => {
    let name = response.engineerName;
    let id = response.engineerId;
    let email = response.engineerEmail;
    let github = response.github;

    const engineer = new Engineer(name, id, email, github);
    employeeArray.push(engineer);
    console.log(employeeArray);
    nextEmployee();
  });
}

function handleIntern() {
  inquirer.prompt(promptIntern).then((response) => {
    let name = response.internName;
    let id = response.internId;
    let email = response.internEmail;
    let school = response.school;

    const intern = new Intern(name, id, email, school);
    employeeArray.push(intern);
    console.log(employeeArray);
    nextEmployee();
  });
}

function handleEmployeeType() {
  inquirer.prompt(promptEmployeeType).then((response) => {
    if (response.employeeType === "Manager")
      () => {
        inquirer.prompt(promptManager).then((response) => {
          let name = response.managerName;
          let id = response.managerId;
          let email = response.managerEmail;
          let officeNumber = response.OfficeNumber;

          const manager = new Manager(name, id, email, officeNumber);

          employeeArray.push(manager);
          addEmployee();
        });
      };
    else if (response.employeeType === "Engineer")
      () => {
        inquirer.prompt(promptEngineer).then((response) => {
          let name = response.engineerName;
          let id = response.engineerId;
          let email = response.engineerEmail;
          let github = response.engineerGithub;

          let engineer = new Engineer(name, id, email, github);

          employeeArray.push(engineer);
          addEmployee();
        });
      };
    else if (response.employeeType === "Intern") {
      promptIntern().then((response) => {
        let name = response.internName;
        let id = response.internId;
        let email = response.internEmail;
        let school = response.internSchool;

        let intern = new Intern();
        employees.push(intern);
        addEmployee();
      });
    }
  });
}

// function promptAddType() {
//
//     {
//       type: "input",
//       message: "Is this employee a Manager, Engineer or Intern ?",
//       choices: ["Manager", "Engineer", "Intern"],
//       name: "addType",
//     },
//   ]);
// }

function addEmployee() {
  if (promptAddEmployee.addEmployee === "Yes") {
    inquirer.prompt(promptEmployeeType).then((employeeType) => {
      handleEmployeeType();
    });
  }
  if (promptAddEmployee.addEmployee === "No") {
    renderHtml(employeeArray);
    return;
  }
  console.log("creating your team (line 261)");
}

function renderHtml() {
  let employeeCards = "";

  employeeArray.forEach((item) => {
    let cardText = item.createCard();
    employeeCards += cardText;
  });

  let htmlTemplate = `
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
              <title>My Team Roster</title>
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
  fs.writeFile("./html/teamPage.html", htmlTemplate, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

inquirerStart();
