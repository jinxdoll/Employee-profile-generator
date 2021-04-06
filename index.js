const inquirer = require("inquirer");
const chalk = require("chalk");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

const employee = new Employee();

function runInquireStart() {
  const questions = [
    {
      type: "input",
      message: "What is your name ?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your id ?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email ?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your role ?",
      choices: ["Manager", "Intern", "Engineer"],
      name: "role",
    },
  ];
  return runInquireStart.prompt(questions);
}

function managerInquirer() {
  const promptArray = [
    {
      type: "input",
      message: " What is your Manager office number?",
      name: "officeNumber",
    },
  ];

  return inquirer.prompt(promptArray);
  getRole();
  {
    return Manager;
  }
}
