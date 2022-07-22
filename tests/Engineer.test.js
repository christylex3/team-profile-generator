const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it("Can make a new instance of Enginner", () => {
        let person = new Engineer();

        expect(person instanceof Engineer).toEqual(true);
    });

    
});