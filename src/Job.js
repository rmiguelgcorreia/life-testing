class Job {
    constructor(role, salary) {
        this.role = role;
        this.salary = salary;
        this.advertising = true;
        this.acceptedCandidate = [];
    };

    gotFilled(person) {
        this.advertising = !this.advertising;
        this.acceptedCandidate.push(person);
    };
};

module.exports = { Job };