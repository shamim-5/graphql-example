// import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { getCompany } from "../graphql/queries";
// import { companies } from '../fake-data';
import JobList from "../components/JobList";
import { useCompany } from "../graphql/hooks";

function CompanyDetail() {
  const { companyId } = useParams();
  const { company, loading } = useCompany(companyId);
  // const [company, setCompany] = useState(null);

  // useEffect(() => {
  //   getCompany(companyId).then(setCompany);
  // }, [companyId]);

  // const company = companies.find((company) => company.id === companyId);
  console.log("[CompanyDetail] company", company);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
      <h5 className="title is-5">Jobs at {company.name}</h5>
      <JobList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
