const Manager = require('../lib/Manager');

describe("Manager", () => {
    it("Can make a new instance of Manager", () => {
        const person = new Manager();

        expect(person instanceof Manager).toEqual(true);
    });

    it("Can set the Manager's office number through constructor", () => {
        const person = new Manager("Star", 33, "star@gmail.com", 102);

        expect(person.officeNumber == "102").toEqual(true);
    });

    it("Can get the Manager's office number through getOfficeNumber()", () => {
        const person = new Manager("Star", 33, "star@gmail.com", 102);

        expect(person.getOfficeNumber() == 102).toEqual(true);
    });

    it("Can get the Manager's role through getRole()", () => {
        const person = new Manager("Star", 33, "star@gmail.com", 102);

        expect(person.getRole() == "Manager").toEqual(true);
    });
});