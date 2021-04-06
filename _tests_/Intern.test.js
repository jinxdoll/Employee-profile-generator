const Intern = require ("../lib/intern");
// const Employee = require("../lib/employee");

describe("set school", () => {
    const testSchool = "school";
        const intern = new Intern("Aimee", 101, "newemployee@testEmail.com", testSchool); 
    expect(intern.school).toBe(testSchool);
  });

  describe("Intern Class", () => {
    describe("getRole method", () => {
      it("returns the role as 'Intern' for the employee object", () => {  
          const testRole = "Intern";    
        const role = new Intern("Aimee",101, "newemployee@testEmail.com", "school");    
        expect(role.getRole()).toBe(testRole);
      });
    });
  });


    describe("getSchool method", () => {
      it("gets the school for the Intern class that extends the Employee object", () => {
        const testSchool = "school";
        const intern = new Intern("Aimee", 101, "newemployee@testEmail.com", testSchool); 
        // const employee = new Employee("New employee", [{ name: " " }]);
        // employee.getName();
        expect(intern.getSchool()).toBe(testSchool);
      });
    });
 