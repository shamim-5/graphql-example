import JobList from "./JobList";
// import { jobs } from '../fake-data';
import { getJobs } from "../graphql/queries";
import { useEffect, useState } from "react";

function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getJobs()
      .then(setJobs)
      .catch((err) => setError(true));
  }, []);

  console.log('[JobBoard] jobs:', jobs);
  if (error) {
    return <p style={{ color: "red" }}>Sorry, something went wrong.</p>;
  }

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
