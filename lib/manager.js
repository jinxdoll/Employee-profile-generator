const Employee = require("../lib/employee"); 
// The other three classes will extend `Employee`.
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber;
        }     

    getRole() {
        return 'Manager';
    }
    
}

module.exports = Manager;