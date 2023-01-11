

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

  
   }),
})

export const {  usePostJobMutation , useGetJobsQuery, useGetJobDetailsQuery, useApplyMutation, useAppliedJobsQuery, useQuestionMutation, useQuestionReplyMutation, useCloseJobMutation, useOpenJobMutation} = jobApi