

import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
   endpoints : (builder) => ({
           //job post
    postJob : builder.mutation({
        query: (data) => ({
         method:"POST",
         url : "/job",
         body: data,
        }),
        invalidatesTags:["jobs"]
    }),
          // get jobs
    getJobs : builder.query({
        query:() =>({
            url: "/jobs",
            
        }),
        providesTags:["jobs"]
        
    }),

      // apply candidates
 
      apply: builder.mutation({
        query: (data) => ({
           method:"PATCH",
           url:"/apply",
           body:data


        }),
        invalidatesTags:["job-details"]
      }),

      question: builder.mutation({
        query: (data) => ({
         url:"/query",
         method:"PATCH",
         body:data,
        }),
        invalidatesTags:["job-details"]
    }),
      questionReply: builder.mutation({
        query: (data) => ({
         url:"/reply",
         method:"PATCH",
         body:data,
        }),
        invalidatesTags:["job-details"]
    }),
      closeJob: builder.mutation({
        query: (data) => ({
         url:"/close",
         method:"PATCH",
         body:data,
        }),
        invalidatesTags:["job-details"]
    }),
      openJob: builder.mutation({
        query: (data) => ({
         url:"/open",
         method:"PATCH",
         body:data,
        }),
        invalidatesTags:["job-details"]
    }),

 
      // applied job
     appliedJobs: builder.query({
        query: (email)=>({
            url:`/applied-jobs/${email}`
        })
     }),
    
     

       // get job details
    getJobDetails : builder.query({
        query: (id) => ({
           url: `/job/${id}`, 
          
        }),
        providesTags:["job-details"]
        
    }),
    getApplicantDetails : builder.query({
        query: (id) => ({
           url: `/applicant/${id}`, 
          
        }),
        }),

         // profile details
    getProfileDetails : builder.query({
        query: (id) => ({
           url: `/profile/${id}`, 
          
        }),
        }),
    
     
        // create chatRoom
        chatRoom: builder.mutation({
          query: (data) => ({
           url:"/chatRoom",
           method:"POST",
           body:data,
          }),
         
      }),

          // get chatRoom
    getChatRoom : builder.query({
      query:() =>({
          url: "/chatRoom",
          
      }),
     
      
  }),

  getUserDetails : builder.query({
    query: (id) => ({
       url: `/conversation/${id}`, 
      
    }),
    
    
}),


        // messages
        messages: builder.mutation({
          query: (data) => ({
           url:"/messages",
           method:"PATCH",
           body:data,
          }),
         
      }),

      // message reply
      messageReply: builder.mutation({
        query: (data) => ({
         url:"/replyMessage",
         method:"PATCH",
         body:data,
        }),
        
    }),

      // find message
      messageFind: builder.mutation({
        query: (data) => ({
         url:"/messageFind",
         method:"PATCH",
         body:data,
        }),
        
    }),


        // message reply
        findMessage: builder.mutation({
          query: (data) => ({
           url:"/findMessage",
           method:"PATCH",
           body:data,
          }),
          
      }),


             // get users
    getUsers : builder.query({
      query:() =>({
          url: "/users",
          
      }),
    
      
  
   

      
  }),
   }),
})

export const {  
 usePostJobMutation ,
 useGetJobsQuery, 
 useGetJobDetailsQuery,
 useApplyMutation, 
 useAppliedJobsQuery,
 useQuestionMutation, 
 useQuestionReplyMutation,
 useCloseJobMutation, 
 useOpenJobMutation, 
 useGetApplicantDetailsQuery, 
 useGetProfileDetailsQuery, 
 useMessageReplyMutation,
 useGetUsersQuery,
 useFindMessageMutation,
 useChatRoomMutation,
 useMessagesMutation,
 useGetChatRoomQuery,
useGetUserDetailsQuery,
useMessageFindMutation
} = jobApi