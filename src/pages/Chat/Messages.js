import React, { useState } from "react";
import { useSelector } from "react-redux";



const Messages = () => {
 
 
    const {user} = useSelector((state)=> state.auth)
    console.log(user)
   
      
   
    
  
   
   
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


//    const [sendMessageReply] = useMessageReplyMutation()
//    const handleMessageReply = (id) => {
//     const replydata = {
//      reply,
//     userId: id
// }
//     sendMessageReply(replydata)
//     console.log(replydata)
    
// }

 
 
 const shownMessage = (userMessage) => {
  const messagedata = {
    message:userMessage.message
  }
//  const {userMessage?.message} = message 
  console.log(messagedata?.message)
 
 }
 
 
//  if (user?.message) {
//   texts = message?.map((text) => (
//      <>{text}</>
//    ));
//  }



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
          <div class="ml-2 font-bold text-2xl mt-16">QuickChat </div>
        </div>
       
        <div
          class="flex flex-col items-center bg-indigo-100 border border-gray-100 mt-12 w-full py-3 rounded-lg" >
          <div class="h-10 w-20 rounded-full border overflow-hidden">
         
         
            {user?.email?.slice(0,1)} 
          
          </div>
         
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
               
                
                
            
         
                  <div class="flex items-center justify-center flex-row-reverse mt-12">
                  {/* {message?.map(({messages})=> <>{messages}</>)} */}
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                     
                    </div>
                    <div
                      class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                    >
                       
                      <div> </div>
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

             
              <div>
              <div class="col-start-6 col-end-13 p-3 rounded-lg">
             <div> 
     
             </div>
      </div>



                
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>





  );
};

export default Messages;