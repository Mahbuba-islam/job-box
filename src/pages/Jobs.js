import React from "react";
import JobCard from "../components/reusable/jobCard";
import { useGetJobsQuery } from "../features/job/jobApi";

const Jobs = () => {
   const {data, isLoading, isError} = useGetJobsQuery()
  console.log(data)
  return (
    <div className='pt-14'>
      <h1>This is job page</h1>
      <div>
        <h1>THIS IS A JOB</h1>
        <div className='grid grid-cols-2 gap-5 mt-5'>
          {
           data?.data?.map((Job, {_id}) => 
             <JobCard key={_id}  jobData={Job}/>
           )
          }
         
        </div>
       
      </div>
    </div>
  );
};

export default Jobs;
