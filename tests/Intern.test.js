const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("Can make a new instance of Intern", () => {
        const person = new Intern();

        expect(person instanceof Intern).toEqual(true);
    });

    it("Can get the Intern's school through getSchool()", () => {
        const person = new Intern("Moon", 27, "Moon@gmail.com", "GT");

        expect(person.school == "GT").toEqual(true);
    });

    it("Can get the Intern's role through getRole()", () => {
        const person = new Intern("Moon", 27, "Moon@gmail.com", "GT");

        expect(person.getRole() == "Intern").toEqual(true);
    });
});