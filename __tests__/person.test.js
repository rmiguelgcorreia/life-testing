const { Person } = require("../src/Person");

describe("Person", () => {

    let person, job, cottage;

    beforeEach(() => {
        person = new Person("Diego", 25);
        job = {
            role: "Developer",
            salary: 100000,
        }

        cottage = {
            onSale: true,
            price: 250000,
            isBought: jest.fn()
        }
    });

    it("creates an instance of person with a given name and age", () => {
        expect(person).toBeInstanceOf(Object);
        expect(person.name).toBe("Diego");
        expect(person.age).toBe(25);
    });

    it("gets a job, which comes with a title and a salary", () => {
        expect(person.career.title).toBe(null);
        expect(person.career.anualSalary).toBe(null);

        person.getAJob(job);

        expect(person.career.title).toBe("Developer");
        expect(person.career.anualSalary).toBe(100000);
    });

    it("has the initial savings set to 0", () => {
        expect(person.savings).toBe(0);
    });

    it("increases the savings a year passes", () => {
        person.getAJob(job);
        person.work();
        expect(person.savings).toBe(100000);
        expect(person.age).toBe(26);
    });

    it("buys a house, once it has enough savings", () => {
        expect(person.ownedHouses).toEqual([]);

        person.getAJob(job);
        person.work();
        person.work();
        person.work();
        person.buyHouse(cottage);

        expect(person.ownedHouses).toEqual([cottage]);
        expect(cottage.isBought).toHaveBeenCalledWith(person);
    });
})