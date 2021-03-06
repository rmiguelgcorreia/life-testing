const { Job } = require("../src/Job");

describe("Job", () => {

    let job, person;

    beforeEach(() => {
        job = new Job("Developer", 100000);
        person = {
            name: "Miguel"
        };
    });

    it("creates an instance of job with a given role and salary", () => {
        expect(job).toBeInstanceOf(Object);
        expect(job.role).toBe("Developer");
        expect(job.salary).toBe(100000);
    });

    it("is no longer advertise, once taken", () => {
        expect(job.advertising).toBe(true);
        expect(job.acceptedCandidate).toStrictEqual([]);

        job.gotFilled(person);

        expect(job.advertising).toBe(false);
        expect(job.acceptedCandidate).toStrictEqual([person]);
        expect(job.acceptedCandidate[0].name).toBe("Miguel");
    });
});