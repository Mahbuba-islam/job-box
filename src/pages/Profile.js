import React, { useState } from "react";
// import { BsArrowReturnRight, BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {  useMessageReplyMutation } from "../features/job/jobApi";

const Profile = () => {
    //  const {id} = useParams()
    //  const {data, isLoading} = useGetProfileDetailsQuery(id)
    // const {data} = useGetUsersQuery()
    
   
  
    const navigate = useNavigate()
   const [reply, setReply] = useState("")
  
  
    const {user} = useSelector((state)=> state.auth)
   
  
    console.log(user)
    const employId = user._id
    console.log(employId)
   
//    const[data] = useMessageMutation()
// const {fristName, lastName, 
//     gender,
//     country,
//     address,
//     city,
//    postcode,
//    role,email,
//    message
//    } = data?.data || {}
//     console.log(message)
   const [sendMessageReply] = useMessageReplyMutation()
   const handleMessageReply = (id) => {
    const replydata = {
     reply,
    userId: id
}
    sendMessageReply(replydata)
    console.log(replydata)
    
   

  }
 
 const shownMessage = (userMessage) => {
  const messagedata = {
    message:userMessage.message
  }
//  const {userMessage?.message} = message 
  console.log(messagedata?.message)
 
 }
 
  return (
<div class="flex h-screen antialiased text-gray-800">
    <div class="flex flex-row h-full w-full overflow-x-hidden">
      <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
        <div class="flex flex-row items-center justify-center h-12 w-full">
          <div
            class="flex items-center mt-16 justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10" >
            <svg
              class="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
          <div class="ml-2 font-bold text-2xl mt-16">QuickChat</div>
        </div>
        <div
          class="flex flex-col items-center bg-indigo-100 border border-gray-100 mt-12 w-full py-3 rounded-lg" >
          <div class="h-10 w-20 rounded-full border overflow-hidden">
          <button onClick={() => navigate(`/profile/${user._id}`)} 
          className="hover text-white px-3 py-1 rounded-full transition-all mx-3 uppercase bg-primary">
            {user?.email?.slice(0,1)}</button>
          </div>
          <div class="text-sm font-semibold mt-2">{user.fristName}</div>
          <div class="text-xs text-gray-500 px-2">{user.role}</div>
          <div class="flex flex-row items-center mt-3">
            <div
              class="flex flex-col justify-center h-3 w-3 bg-green-500 rounded-full">
            </div>
            <div class=" ml-1 text-xs">Active</div>
          </div>
        </div>
        <div class="flex flex-col mt-8">
          <div class="flex flex-row items-center justify-between text-xs">
            <span class="font-bold">Active Conversations</span>
            </div>
          <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
            <button onClick={() => navigate(`/conversation/${user._id}`)}>Messages</button>
           <div
              class="flex flex-col items-center rounded-xl p-2 mr-16 mb-16"
            >
              {user?.message?.map((userMessage)=> 
              <button onClick={()=>shownMessage(userMessage)} className="flex flex-row items-center justify-center hover:bg-gray-100 rounded-xl my-2 mx-2 p-2 ml-6 ">
                <div
                class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full"
              >
                {userMessage?.email?.slice(0,1)}
              </div>
              <div class="ml-2 text-sm font-semibold  w-20">   
              {userMessage?.email?.slice(0,7)}
               </div>
             
               <div
                class="flex items-center justify-center p-3  text-xs ml-4 text-white bg-red-500 h-4 w-4 rounded-full leading-none"
              >
                {userMessage?.message?.length}
              </div>
               
              </button>)}
              
             
              
            </div>
           

            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full"
              >
                J
              </div>
              <div class="ml-2 text-sm font-semibold">Jerry Guzman</div>
            </button>
          </div>
          <div class="flex flex-row items-center justify-between text-xs mt-6">
            <span class="font-bold">Archivied</span>
            <span
              class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
              >7</span
            >
          </div>
          <div class="flex flex-col space-y-1 mt-4 -mx-2">
            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
              >
                H
              </div>
              <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-auto h-full p-6">
        <div
          class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
        >
          <div class="flex flex-col h-full overflow-x-auto mb-4">
            <div class="flex flex-col h-full">
              <div class="grid grid-cols-12 gap-y-2">
               
                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center ">
                 
                   <div className="mt-5 flex flex-col items-center ">
                   {user?.message?.map((userMessage)=> 
                       <div className="flex flex-row items-center justify-center hover:bg-gray-100 rounded-xl my-2 mx-2">
                    
                     <div class="flex items-center justify-center h-10 w-10 bg-gray-200 rounded-full">
                      {userMessage?.email?.slice(0,1)}
                     </div> 
                    
                   
                    <div id="message" class=" relative ml-6 text-sm bg-indigo-100 py-2 px-2 shadow rounded-xl h-10 w-60">
                      </div>
                     </div>)}
                     
                     </div> 
                     
                  </div>

                </div>
                <div class="col-start-6 col-end-13 p-3 rounded-lg">
                  <div class="flex items-center justify-start flex-row-reverse">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                      class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                    >
                      <div>I'm ok what about you?</div>
                    </div>
                  </div>
                </div>
               
                
               
                
              </div>
            </div>
          </div>
          <div
            class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
          >
            <div>
              <button
                class="flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex-grow ml-4">
              <div class="relative w-full">
                <input
                  type="text"
                  class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                />
                <button
                  class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="ml-4">
              <button
                class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Send</span>
                <span class="ml-2">
                  <svg
                    class="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



    // <div className='pt-14'>
    //   <h1>welcome to your profile</h1>
     
        
    //   <div className='flex justify-between  text-primary'>
    //     <div>
    //       <p className='text-xl'>{fristName}</p>
    //       <small className='text-primary/70 '>
           
    //         <span className='font-semibold hover:text-primary cursor-pointer hover:underline transition-all'>
    //           {lastName}
    //         </span>
    //       </small>
    //     </div>
    //     <p>{address}</p>
    //     <p>{country}</p>
    //     <p>{gender}</p>
    //   </div>
    //   <div className='flex justify-between items-center mt-5'>
    //     <p>{city}</p>
    //     <p>{postcode}</p>
    //     <p>{role}</p>
    //     <p>{email}</p>
    //     <button className='btn'>
    //       Message:
    //    </button>

    //     <div className='text-primary my-2'>
                
    //            {
    //             message?.map(({id, email, message,reply}) => <div>
    //              {/* <small>{id}</small> */}
    //                 <p>{message}</p>
    //                 <p>{email}</p>
    //                 {reply?.map((item) => (
    //                 <p className='flex items-center gap-2 relative left-5'>
    //                   <BsArrowReturnRight /> {item}
    //                 </p>
                    
    //               ))}
    //                <div className='flex gap-3 my-5'>
    //                   <input onBlur={(e)=> setReply(e.target.value)} placeholder='Reply' type='text' className='w-full' />
    //                   <button 
    //                     className='shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white'
    //                     type='button' onClick={()=> handleMessageReply(id)}
    //                   >
    //                     <BsArrowRightShort size={30} />
    //                   </button>
    //                 </div> 
                    
    //             </div>)
                
    //            } 
                
                    
                    
    //                 </div>
    //                 </div>

    //   </div>
      
    
      
   
  );
};

export default Profile;