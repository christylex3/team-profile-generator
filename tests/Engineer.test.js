const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it("Can make a new instance of Enginner", () => {
        const person = new Engineer();

        expect(person instanceof Engineer).toEqual(true);
    });

    it("Can set the Engineer's GitHub username through constructor", () => {
        const person = new Engineer("Sun", 77, "sun@gmail.com", "thegreatsunGitHub");

        expect(person.github == "thegreatsunGitHub").toEqual(true);
    });

    it("Can get the Engineer's role through getRole()", () => {
        const person = new Engineer("Sun", 77, "sun@gmail.com", "thegreatsunGitHub");

        expect(person.getRole() == "Engineer").toEqual(true);
    });
});