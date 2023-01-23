import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import avatar from "../employeeDashboard/avatar.png";
import { useNavigate, useParams } from "react-router-dom";
import {  useGetChatDetailsQuery, useGetChatRoomQuery, useGetUserDetailsQuery, useMessageFindMutation, useMessageReplyMutation, useMessagesMutation } from "../../features/job/jobApi";



const ChatRoom = () => {
 
  const {id} = useParams()
  const {register, handleSubmit, reset} = useForm()
  console.log(id)
  
   
    const {user} = useSelector((state)=> state.auth)
    console.log(user)
   
      // data?.data?.map((r, {_id}) => 
      //  <div>id:{r?._id}
      //  </div>
      
      // )
   
    const navigate = useNavigate()
   const [reply, setReply] = useState("")
  
  
   
    // const messages = user?.[message]
    // console.log(messages)
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

  const [chat] = useMessagesMutation()

 

  const handleMessage = (data) => {
     const chatdata = {
        ...data,
       senderId : user._id,
        receiverId : id,
        email : user.email,
        text:[]
        }
      
       console.log(chatdata)
       chat(chatdata)
      reset()
    
   
  }
   const [findMessage] = useMessageFindMutation()
  
  const {data,  isLoading} = useGetUserDetailsQuery(id)
    console.log(data)
    const {message} = data?.data || {}
   let text
 const shownMessage = (email,messages,id) => {
  console.log(messages)
  if(email){
    text = messages
  }
 
  findMessage({email:email, messages:messages,text:text, id:id, userId:user._id})
  console.log(messages)
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
          <div class="ml-2 font-bold text-2xl mt-16">QuickChat </div>
        </div>
       
        <div
          class="flex flex-col items-center bg-indigo-100 border border-gray-100 mt-12 w-full py-3 rounded-lg" >
          <div class="h-10 w-20 rounded-full border overflow-hidden">
          <button onClick={() => navigate(`/profile/${user._id}`)} 
          className="hover text-white px-3 py-1 rounded-full transition-all mx-3 uppercase bg-primary">
            {user?.email?.slice(0,1)}   </button>
          
          </div>
         
          <div class="flex flex-row items-center mt-3">
            <div
              class="flex flex-col justify-center h-3 w-3 bg-green-500 rounded-full">
            </div>
            <div class=" ml-1 text-xs">Active</div>
          </div>
        </div>
        <div class="flex flex-col mt-8">
          
          <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
          <ul class="p-6 divide-y divide-slate-200">
       

          <div class="flex flex-row items-center justify-between text-xs">
            <span class="text-xl font-bold text-blueGray-700 capitalize">Inbox</span>
            </div>
    <li class="flex py-4 first:pt-0 last:pb-0">
      <div class=" overflow-hidden pr-40">
      
      {message?.map(({email,id, messages})=>  
      <button onClick={()=> shownMessage(email,messages,id)} class=" hover:border pr-16 pl-2 flex gap-2 text-left ">
      <img class="h-10 w-10 rounded-full my-3" src={avatar} alt="" />
      <div>
      <p class="text-sm font-medium text-slate-900 mt-3">{email?.slice(0, 5)}</p>
      <p class="text-xs text-slate-500 truncate">{email}</p>
      </div>
        
      </button>)}
      </div>
     
     
    </li>
  
</ul>
          
           

           
          </div>
          
         
        </div>
      </div>
      <div class="flex flex-col flex-auto h-full p-6">
        <div
          class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
        >
          <div class="flex flex-col h-full overflow-x-auto mb-4">
            <div class="flex flex-col h-full">
              <div class="grid gap-y-2">
               
                
                
            
         
                  <div class="flex ml-8 items-center justify-center flex-row-reverse mt-12 ">
                  {message?.map(({messages, email})=> <>{messages}
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      {email?.slice(0,1)}
                     
                    </div>
                    </>)}
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
    {user.role === "employer" && 
    <form onSubmit={handleSubmit(handleMessage)}>
    <div className='flex gap-3 my-5'>
   <input
         placeholder='message me...'
         type='text'
         class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
        {...register("messages")}
      />
      
     
      

      <div class="ml-4">
      <button type='submit'
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
     </form>} 
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

export default ChatRoom;