import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../../components/reusable/jobCard";
import { useAppliedJobsQuery } from "../../features/job/jobApi";

const AppliedJobs = () => {
    const {user:{email}} = useSelector((state)=> state.auth)
    const {data} = useAppliedJobsQuery(email)
    console.log(data)
  return (
    <div>
      <h1 className="my-5 text-lg font-semibold text-primary">Applied jobs</h1>
      <div className="grid grid-cols-2 gap-8">
      {
        data?.data?.map((job)=> 
         <JobCard jobData={job}/>
        )
      }
      </div>
      
    </div>
  );
};

export default AppliedJobs;
