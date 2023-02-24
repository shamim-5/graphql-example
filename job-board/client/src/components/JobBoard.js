import { useJobs } from "../graphql/hooks";
import JobList from "./JobList";
// import { jobs } from '../fake-data';
// import { getJobs } from "../graphql/queries";
// import { useEffect, useState } from "react";

function JobBoard() {
  const { jobs, loading, error } = useJobs();
  // const [jobs, setJobs] = useState([]);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   getJobs()
  //     .then(setJobs)
  //     .catch((err) => {
  //       console.error(err);
  //       setError(true);
  //     });
  // }, []);

  // console.log("[JobBoard] jobs:", jobs);

  console.log("[JobBoard]", { jobs, loading, error });
  if (loading) {
    return <p>Loading...</p>;
  }
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
