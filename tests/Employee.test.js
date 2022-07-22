const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Instantiation", () => {
        it("Can make a new instance of Employee", () => {
            const person = new Employee();

            expect(person instanceof Employee).toEqual(true);
        });

    });
});