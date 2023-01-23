import React from "react";
import { useForm } from "react-hook-form";
import { BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {  useChatRoomMutation, useGetApplicantDetailsQuery, useMessageMutation } from "../features/job/jobApi";
import ChatRoom from "./Chat/ChatRoom";


const CandidateDetails = () => {
     const {id} = useParams()
     const {register, handleSubmit, reset} = useForm()
     const navigate = useNavigate()
     const {user} = useSelector((state)=> state.auth)
 
    const {data, isLoading, isError, _id} = useGetApplicantDetailsQuery(id)
    
    const {fristName, lastName,
         
        gender,
        country,
        address,
        city,
       postcode,
       role,email, 
       } = data?.data || {}
       
     const [chatRoom] = useChatRoomMutation()

       const handleChatRoom = (id) => {
        chatRoom({...data, email:email, messages:[], id
         })
      
       }
      

      
       
    return (
       <div>
      <div class="overflow-hidden bg-white shadow sm:rounded-lg mt-11 py-6 ">
      <div class="px-4 py-5 sm:px-6 mt-4">
        <h3 class="text-lg font-medium leading-6 text-gray-900 mt-11">Applicant Information</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 capitalize">fullName</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 capitalize">{fristName} {lastName}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{email}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 capitalize">Gender</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 capitalize">{gender}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 capitalize">Country</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 capitalize">{country}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 capitalize">address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 capitalize">{address}</dd>
          </div>
         
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 capitalize">City</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 capitalize">{city}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 capitalize">Postcode</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 capitalize">{postcode}</dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Application for</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
          </div>
          
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Salary expectation</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div>
          {/* onClick={()=> handleChatRoom()} */}
      <button onClick={() => navigate(`/conversation/${id}`)} >
      <div class="flex justify-end ">
          {/* onClick={() => navigate(`/chatRoom/${email}/${id}`)}  */}
   <button  class=" flex justify-center items-center  mr-0   bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  
   {/* <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" class="w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path>
</svg> */}
<p className="pl-3 font-bold">chat</p>

   <button  className=" flex justify-end items-end mt-4  ml-6 hover  text-white rounded-full transition-all uppercase bg-primary  ">
  <p class="px-2 py-2 font-bold text-lg">{lastName?.slice(0,1)}</p> 
   <div
   class="flex  justify-end items-end pl-2 mt-3  h-3 w-3 bg-green-500 rounded-full">
  </div>
  </button>
 
 
            

{/* <p className="mx-3">chat</p>  */}
</button>

   </div>
   
      </button>
         

        </dl>
      </div>
      
      <p class="md:space-x-1 space-y-1 md:space-y-0 mb-4">

     
   
 
</p>

</div>



    </div>
    



    // <div className=' grid grid-cols-2 border border-gray-300 shadow-xl p-5 rounded-2xl text-primary'>
      
       
    //     <div >

    //     <h1>{role}</h1>
    //     <h1>{fristName}</h1>
    //     <h1>{lastName}</h1>
    //     <h1>{email}</h1>
    //     <h1>{id}</h1>
    //     <h1>{gender}</h1>
    //     <h1>{city}</h1>
    //     <h1>{address}</h1>
    //     <h1>{country}</h1>
    //     <h1>{postcode}</h1>
    //     {/* <button className='btn' onClick={handleMessage()}>message</button> */}
    //     </div>
    //     <div>

    //     </div>
    //     <div>
    //     <form onSubmit={handleSubmit(handleMessage)}>
    //            <div className='flex gap-3 my-5'>
    //             <input
    //               placeholder='message me...'
    //               type='text'
    //               className='w-full'
    //               {...register("message")}
    //             />
    //             <button
    //               className='shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white'
    //               type='submit'
    //             >
    //               <BsArrowRightShort size={30} />
    //             </button>
    //           </div>
    //            </form>
    //     </div>

    //      </div>
   );
};

export default CandidateDetails;
