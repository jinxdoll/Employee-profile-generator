const Employee = require("../lib/employee");



// describe("Employee", () => { 
//   describe("Initialization", () => {  
//     it("creates an object with name, id and email as properties", () => {
//      const employee = new Employee();
//      expect(typeof(employee)).toBe("object");

//     });
//   });
  
// });



describe("Employee Class", () => {
  describe("getName method", () => {
    it("creates a name for the employee class object", () => {
      const employee = new Employee("New employee", [{ name: " " }]);
      employee.getName("");
      expect(employee.name).toBe("New employee");
    });
  });
});

describe("Employee Class", () => {
  describe("getId method", () => {
    it("creates a ID for the employee class object", () => {
      const testValue = 101;
      const id = new Employee("Employee ID", testValue);    
      expect(id.getId()).toBe(testValue);
    });
  });
});

// describe("Employee Class", () => {
//   describe("getId method", () => {
//     it("creates a id for the employee class object", () => {
//       const id = new Id("New Id", [{ id: "Employee Id" }]);
//       employee.getId("Employee Id");
//       expect(employee.Id).toBe("Employee Id");
//     });
//   });
// });

// describe("Employee Class", () => {
//   describe("getEmail method", () => {
//     it("gets an email", () => {
//       const email = new Email("New Email", [{ Email: "Employee Email" }]);
//       employee.getEmail("Employee Email");
//       expect(employee.Email).toBe("Employee Email");
//     });
//   });
// });

// describe("Employee Class", () => {
//   describe("getRole method", () => {
//     it("gets a Role", () => {
//       const role = new Role("New Role", [{ role: "Employee Role" }]);
//       employee.getRole("Employee Role");
//       expect(employee.role).toBe(Employee);
//     });
//   });
// });
