const Engineer = require ("../lib/engineer");
// const Employee = require("../lib/employee");

describe("set Github account name", () => {
    const testGit = "githubUser";
        const engineer = new Engineer("Aimee", 101, "newemployee@testEmail.com", testGit); 
    expect(engineer.github).toBe(testGit);
  });

  describe("Engineer Class", () => {
    describe("getRole method", () => {
      it("returns the role as 'Engineer' for the employee object", () => {  
          const testRole = "Engineer";    
        const role = new Engineer("Aimee",101, "newemployee@testEmail.com", "githubUser");    
        expect(role.getRole()).toBe(testRole);
      });
    });
  });


    describe("getGithub method", () => {
      it("gets the Github username for the Engineer class that extends the Employee object", () => {
        const testGit = "githubUser";
        const engineer = new Engineer("Aimee", 101, "newemployee@testEmail.com", testGit); 
        // const employee = new Employee("New employee", [{ name: " " }]);
        // employee.getName();
        expect(engineer.getGithub()).toBe(testGit);
      });
    });
 