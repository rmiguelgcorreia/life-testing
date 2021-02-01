const { House } = require("../src/House");

describe("House", () => {

    let cottage, person, job;

    beforeEach(() => {
        cottage = new House(true, 250000);

        person = {
            savings: 300000
        };
    });

    it("creates an instance of House, set for sale at an initial cost", () => {
        expect(cottage).toBeInstanceOf(Object);
        expect(cottage.onSale).toBe(true);
        expect(cottage.price).toBe(250000);
    });

    it("has no owner, initially", () => {
        expect(cottage.owner).toBe(null);
    });

    it("can be bought by a person", () => {
        cottage.isBought(person);

        expect(cottage.owner).toBe(person);
        expect(cottage.onSale).toBe(false);
        expect(cottage.price).toBe(null);
    });
})