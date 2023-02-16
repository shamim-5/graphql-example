import { Company, Job } from "./db.js";

export const resolvers = {
  Query: {
    //  greeting: () => "Hello world!",
    //  jobs: () => [],
    jobs: () => Job.findAll(),
  },
  Job: {
    company: (job) => Company.findById(job.companyId),
  },
};
