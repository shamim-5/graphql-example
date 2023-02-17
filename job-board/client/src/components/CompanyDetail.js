import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCompany } from "../graphql/queries";
// import { companies } from '../fake-data';

function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const { companyId } = useParams();

  useEffect(() => {
    getCompany(companyId).then(setCompany);
  }, [companyId]);

  // const company = companies.find((company) => company.id === companyId);
  console.log("[CompanyDetail] company", company);

  if (!company) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
    </div>
  );
}

export default CompanyDetail;
