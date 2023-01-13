import React from "react";
import { useForm } from "react-hook-form";
import { BsArrowRightShort } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useGetApplicantDetailsQuery } from "../features/job/jobApi";


const CandidateDetails = () => {
     const {id} = useParams()
     const {register, handleSubmit, reset} = useForm()
    const {data, isLoading, isError, _id} = useGetApplicantDetailsQuery(id)
   
   
    const {fristName, lastName, 
        gender,
        country,
        address,
        city,
       postcode,
       role,email
       } = data?.data || {}
       
       const handleMessage = (data) => {
        console.log(data)
       
      }
      

    return (
    <div className=' grid grid-cols-2 border border-gray-300 shadow-xl p-5 rounded-2xl text-primary'>
      
       
        <div >
        <h1>{role}</h1>
        <h1>{fristName}</h1>
        <h1>{lastName}</h1>
        <h1>{email}</h1>
        <h1>{gender}</h1>
        <h1>{city}</h1>
        <h1>{address}</h1>
        <h1>{country}</h1>
        <h1>{postcode}</h1>
        {/* <button className='btn' onClick={handleMessage()}>message</button> */}
        </div>
        <div>

        </div>
        <form onSubmit={handleSubmit(handleMessage)}>
               <div className='flex gap-3 my-5'>
                <input
                  placeholder='message me...'
                  type='text'
                  className='w-full'
                  {...register("message")}
                />
                <button
                  className='shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white'
                  type='submit'
                >
                  <BsArrowRightShort size={30} />
                </button>
              </div>
               </form>
         </div>
   );
};

export default CandidateDetails;
