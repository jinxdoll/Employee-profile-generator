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

