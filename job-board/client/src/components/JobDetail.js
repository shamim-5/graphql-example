// import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useJob } from "../graphql/hooks";
// import { jobs } from '../fake-data';
// import { getJob } from "../graphql/queries";

function JobDetail() {
  const { jobId } = useParams();
  const { job, loading } = useJob(jobId);
  // const [job, setJob] = useState(null);

  // useEffect(() => {
  //   getJob(jobId).then(res => setJob(res));
  // }, [jobId]);

  // const job = jobs.find((job) => job.id === jobId);
  console.log("[JobDetail] job:", job);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1 className="title">{job.title}</h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
      </h2>
      <div className="box">{job.description}</div>
    </div>
  );
}

export default JobDetail;
