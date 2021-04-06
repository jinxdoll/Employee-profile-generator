const Employee = require("../lib/employee"); 
// The other three classes will extend `Employee`.
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
        } 
        
        
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    
}

module.exports = Manager;