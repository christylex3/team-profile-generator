const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can make a new instance of Employee", () => {
        let person = new Employee();

        expect(person instanceof Employee).toEqual(true);
    });

    it("Can set the name of the Employee through constructor", () => {
        let person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.name === "Mo").toEqual(true);
    });

    it("Can set the id of the Employee through constructor", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.id == "11").toEqual(true);
    });

    it("Can set the email of the Employee through constructor", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.email == "mo@gmail.com").toEqual(true);
    });

    it("Can get the name of the Employee through getName()", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.getName() == "Mo").toEqual(true);
    });

    it("Can get the id of the Employee through getID()", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.getId() == "11").toEqual(true);
    });

    it("Can get the email of the Employee through getEmail()", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.getEmail() == "mo@gmail.com").toEqual(true);
    });

    it("Can get the role of the Employee through getRole()", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.getRole() == "Employee").toEqual(true);
    });
});