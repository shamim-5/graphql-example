import { Company, Job } from "./db.js";

export const resolvers = {
  Query: {
    //  greeting: () => "Hello world!",
    //  jobs: () => [],
    job: (_root, { id }) => Job.findById(id),
    jobs: () => Job.findAll(),
  },
  Job: {
    company: (job) => Company.findById(job.companyId),
  },
};
