const Employee = require("../lib/employee");

describe("Employee Class", () => {
  describe("getName method", () => {
    it("creates a name for the employee class object", () => {
      const testName = "Aimee";
      const employee = new Employee(testName);
      expect(employee.name).toBe(testName);
    });
  });
});

describe("Employee Class", () => {
  describe("getId method", () => {
    it("creates a ID for the employee class object", () => {
      const testId = 101;
      const id = new Employee("Aimee", testId);
      expect(id.getId()).toBe(testId);
    });
  });
});

describe("Employee Class", () => {
  describe("getEmail method", () => {
    it("creates a email for the employee class object", () => {
      const testEmail = "newemployee@testEmail.com";
      const email = new Employee("Aimee", 101, testEmail);
      expect(email.getEmail()).toBe(testEmail);
    });
  });
});

describe("Employee Class", () => {
  describe("getRole method", () => {
    it("returns the role for the employee object", () => {
      const role = new Employee(
        "Aimee",
        101,
        "newemployee@testEmail.com",
        "Employee"
      );
      expect(role.getRole()).toBe("Employee");
    });
  });
});
