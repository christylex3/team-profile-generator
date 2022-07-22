const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can make a new instance of Employee", () => {
        const person = new Employee();

        expect("Employee" in person).toEqual(true);
    });
})