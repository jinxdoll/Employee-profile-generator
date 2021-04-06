const inquirer = require("inquirer");
// const chalk = require("chalk");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(_dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "teamPage.html");

const html = require("./lib/html");
const Choices = require("inquirer/lib/objects/choices");

const employee = new Employee();

function promptEmployeeType() {
  return inquirer.prompt([
    {
      type: "list",
      name: "employeeType",
      message:
        "Please choose the employee's type. Enter Manager, Engineer or Intern. Or choose EXIT",
      choices: ["Manager", "Engineer", "Intern", "EXIT"],
    },
  ]);
}

function promptEngineer() {
  return inquirer.prompt([
    {
      message: "What is the Engineer's name ?",
      name: "Engineer'sme",
    },
    {
      message: "What is the Engineer's id number ?",
      name: "id",
    },
    {
      message: "What is the Engineer's email ?",
      name: "email",
    },
    {
      message: "What is the Engineer's Github username ?",
      name: "github",
    },
  ]);
}

function promptIntern() {
  return inquirer.prompt([
    {
      message: "What is the Intern's name ?",
      name: "Intern'ame",
    },
    {
      message: "What is the Intern's id number ?",
      name: "id",
    },
    {
      message: "What is the Intern's email ?",
      name: "email",
    },
    {
      message: "What is the Intern's school ?",
      name: "school",
    },
  ]);
}
