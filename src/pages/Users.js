import React from "react";
import JobCard from "../components/reusable/jobCard";
import { useGetUsersQuery } from "../features/job/jobApi";
import Profile from "./Profile";

const Users = () => {
   const {data, isLoading, isError} = useGetUsersQuery()
  console.log(data)
  return (
    <div className='pt-14'>
      <h1>This is user page</h1>
      <div>
        <h1>THIS IS A JOB</h1>
        <div className='grid grid-cols-2 gap-5 mt-5'>
            {
           data?.data?.map((user, {_id}) => 
             <Profile key={_id}  userData={user}/>
           )
          } 
          
        </div>
       
      </div>
    </div>
  );
};

export default Users;
