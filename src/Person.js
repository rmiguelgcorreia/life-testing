class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.savings = 0;
        this.ownedHouses = [];
        this.career = {
            title: null,
            anualSalary: null
        };
    };

    getAJob(job) {
        this.career.title = job.role;
        this.career.anualSalary = job.salary;
    };

    work() {
        this.age++;
        this.savings += this.career.anualSalary;
    };

    buyHouse(house) {
        if(this.savings >= house.price) {
            this.ownedHouses.push(house);
            house.isBought(this);
        }
    };
};

module.exports = { Person };