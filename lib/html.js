const path = require("path");
const fs = require("fs");
const { dirname } = require("path");

const htmlDir = path.resolve(-dirname, "../public/html");

const html = (employees) => {
  const htmlPage = [];

  htmlPage.push(
    employees
      .filter((employee) => employee.getrole() === "Manager")
      .map((manager) => htmlManager(manager))
  );
  htmlPage.push(
    employees
      .filter((employee) => employee.getrole() === "Engineer")
      .map((engineer) => htmlEngineer(engineer))
  );
  htmlPage.push(
    employees
      .filter((employee) => employee.getrole() === "Intern")
      .map((intern) => htmlIntern(intern))
  );
  return htmlTeam(htmlPage.join(""));
};

const htmlManager = (manager) => {
  let htmlTemplate = fs.readFileSync(
    path.resolve(htmlDir, "managerPage.html"),
    "utf8"
  );
  htmlTemplate = replacePlaceholders(htmlTemplate, "name", manager.getName());
  htmlTemplate = replacePlaceholders(htmlTemplate, "id", manager.getId());
  htmlTemplate = replacePlaceholders(htmlTemplate, "email", manager.getEmail());
  htmlTemplate = replacePlaceholders(
    htmlTemplate,
    "officeNumber",
    manager.getOfficeNumber()
  );
  htmlTemplate = replacePlaceholders(htmlTemplate, "role", manager.getRole());
  return htmlTemplate;
};

const htmlEngineer = (engineer) => {
  let htmlTemplate = fs.readFileSync(
    path.resolve(htmlDir, "engineerPage.html"),
    "utf8"
  );
  htmlTemplate = replacePlaceholders(htmlTemplate, "name", engineer.getName());
  htmlTemplate = replacePlaceholders(htmlTemplate, "id", engineer.getId());
  htmlTemplate = replacePlaceholders(
    htmlTemplate,
    "email",
    engineer.getEmail()
  );
  htmlTemplate = replacePlaceholders(
    htmlTemplate,
    "github",
    engineer.getGithub()
  );
  htmlTemplate = replacePlaceholders(htmlTemplate, "role", engineer.getRole());
  return htmlTemplate;
};

const htmlIntern = (intern) => {
  let htmlTemplate = fs.readFileSync(
    path.resolve(htmlDir, "internPage.html"),
    "utf8"
  );
  htmlTemplate = replacePlaceholders(htmlTemplate, "name", intern.getName());
  htmlTemplate = replacePlaceholders(htmlTemplate, "id", intern.getId());
  htmlTemplate = replacePlaceholders(htmlTemplate, "email", intern.getEmail());
  htmlTemplate = replacePlaceholders(
    htmlTemplate,
    "school",
    intern.getSchool()
  );
  htmlTemplate = replacePlaceholders(htmlTemplate, "role", intern.getRole());
  return htmlTemplate;
};

const htmlTeam = (htmlPage) => {
  const htmlTemplate = fs.readFileSync(
    path.resolve(htmlDir, "teamPage.html", "utf8")
  );
  return replacePlaceholders(htmlTemplate, "employeeTeam", htmlPage);
};

module.exports = html;
