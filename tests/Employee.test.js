const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can make a new instance of Employee", () => {
        const person = new Employee();

        expect(person instanceof Employee).toEqual(true);
    });

    it("Can set the Employee's name through constructor", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.name === "Mo").toEqual(true);
    });

    it("Can set the Employee's id through constructor", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.id == "11").toEqual(true);
    });

    it("Can set the Employee's email through constructor", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.email == "mo@gmail.com").toEqual(true);
    });

    it("Can get the Employee's name through getName()", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.getName() == "Mo").toEqual(true);
    });

    it("Can get the Employee's id through getID()", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.getId() == "11").toEqual(true);
    });

    it("Can get the Employee's email through getEmail()", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.getEmail() == "mo@gmail.com").toEqual(true);
    });

    it("Can get the Employee's role through getRole()", () => {
        const person = new Employee("Mo", 11, "mo@gmail.com");

        expect(person.getRole() == "Employee").toEqual(true);
    });
});