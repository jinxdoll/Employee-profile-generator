const Manager = require ("../lib/manager");
const Employee = require("../lib/employee");

describe("set office number", () => {
    const testOffNum = 7000;
        const officeNum = new Manager("Aimee", 101, "newemployee@testEmail.com", testOffNum); 
    expect(officeNum.officeNumber).toBe(testOffNum);
  });

  describe("Manager Class", () => {
    describe("getRole method", () => {
      it("returns the role as 'Manager' for the employee object", () => {  
          const testRole = "Manager";    
        const role = new Manager("Aimee",101, "newemployee@testEmail.com", 7000);    
        expect(role.getRole()).toBe(testRole);
      });
    });
  });


    describe("getOfficeNumber method", () => {
      it("creates a office number for the Manager class that extends the Employee object", () => {
        const testOffNum = 7000;
        const officeNum = new Manager("Aimee",101, "newemployee@testEmail.com", testOffNum); 
        // const employee = new Employee("New employee", [{ name: " " }]);
        // employee.getName();
        expect(officeNum.getOfficeNumber()).toBe(testOffNum);
      });
    });
 


    