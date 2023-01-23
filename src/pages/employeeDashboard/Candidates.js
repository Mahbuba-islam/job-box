import React from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../employeeDashboard/avatar.png";
import { useGetJobsQuery } from "../../features/job/jobApi";

const Candidates = () => {
    const {data, isLoading, isError} = useGetJobsQuery()
    const navigate = useNavigate();
  console.log(data?.data?.position
    )
    // const { applicants} = data?.data || {}
    // console.log(data.applicants)
    return (
    <div>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

<section class="pt-20 pb-20">
<div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold  text-blueGray-700">All applicants</h2>
             </div>
          </div>
          <div class="grid grid-cols-6 gap-8">
          {
           data?.data?.map((
            {applicants} ,{_id}, {position}) => 
            
            <>
           
            {applicants.map(({ id, applicantDetails})=> 
            <div class=" border pb-6 ">
              <img class="h-15 border" alt="..." src={avatar}/>

              <div class="py-6 text-center">
          <h5 class="text-xl font-bold text-blueGray-700 capitalize">{applicantDetails?.firstName} {applicantDetails?.lastName}</h5>
          <p class="mt-1 text-sm text-blueGray-400  font-semibold py-2 capitalize"> {applicantDetails?.role} </p>
          <button className='btn' onClick={() => navigate(`/applicant/${id}`)}>
            Details 
          </button>
          {/* {data?.data?.map((c)=> <>{c.position}</>)} */}
          <div class="mt-6">
            
            <button class="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i class="fab fa-twitter"></i></button><button class="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i class="fab fa-facebook-f"></i></button><button class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
              <i class="fab fa-dribbble"></i>
            </button>
          </div>
        </div>
    </div>
         )}</>
           )
          }
          </div>
         
  
    </section>



 
      {/* <div className='grid grid-cols-3 gap-12 gap-y-12   mt-9 '>
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
     
     */}

    </div>
  );
};

export default Candidates;
