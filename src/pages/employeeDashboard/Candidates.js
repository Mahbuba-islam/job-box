import React from "react";
import { useNavigate } from "react-router-dom";

import { useGetJobsQuery } from "../../features/job/jobApi";

const Candidates = () => {
    const {data, isLoading, isError} = useGetJobsQuery()
    const navigate = useNavigate();
  console.log(data?.data
    )
    // const { applicants} = data?.data || {}
    // console.log(data.applicants)
    return (
    <div>
      <h1>All applicants</h1>
      <div className='grid grid-cols-3 gap-12 gap-y-12   mt-9 '>
      {
           data?.data?.map(( {applicants} ,{_id}) => 
            <div  >{applicants.map(({email, fristName, role, id, applicantDetails})=> <div className='border border-gray-300 shadow-xl p-5 rounded-2xl text-primary'><h1>{email}</h1>
            <h1>{fristName}</h1><h1>{role}</h1><h1>{id}</h1>
            <h1>{applicantDetails?.firstName}</h1>
            <h1>{applicantDetails?.lastName}</h1>
            <h1>{applicantDetails?.role}</h1>
            <h1>{applicantDetails?.city}</h1>
            <h1>{applicantDetails?.address}</h1>
            <h1>{applicantDetails?.gender}</h1>
            <button className='btn'>message</button>
            <button className='btn' onClick={() => navigate(`/applicant/${id}`)}>
          Details
        </button>
            </div>
           
            )}</div>
           )
          }
      </div>
     
         
      {/* <div>{applicants?.map(({_id, email, }) => 
      <div>
      
      <h2>email:{email}</h2>
      </div>)}
      </div> */}
       
    </div>
  );
};

export default Candidates;
