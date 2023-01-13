import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import meeting from "../assets/meeting.jpg";
import {  useNavigate, useParams } from "react-router-dom";
import { useApplyMutation, useCloseJobMutation, useGetJobDetailsQuery, useOpenJobMutation, useQuestionMutation, useQuestionReplyMutation } from "../features/job/jobApi";
import { BsArrowRightShort, BsArrowReturnRight } from "react-icons/bs";
import { useForm } from "react-hook-form";

const JobDetails = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {register, handleSubmit, reset} = useForm()
  const [reply, setReply] = useState("")
 
 const {data, isLoading, isError} = useGetJobDetailsQuery(id, {pollingInterval: 10000})
  const {user} = useSelector((state)=> state.auth)
  const userId = user._id
   // question
   
   
  const { companyName,
    position,
    location,
    experience,
    workLevel,
    employmentType,
    salaryRange,
    skills,
    requirements,
    responsibilities,
    overview,
    queries,
    totalApplicants,
    status,
    applicants,
    _id} = data?.data || {}
  console.log(applicants?.id)
  
  const [apply] = useApplyMutation()
  const [askQuestion] = useQuestionMutation()
   const [sendReply] = useQuestionReplyMutation()
   const [closePosition] = useCloseJobMutation()
    const [openPosition] = useOpenJobMutation()
   
 const handleApply = () => {
  if(user.role === "employer"){
    toast.error("you need a candidate account to apply")
    return;
   }
  
   if(user.role === ""){
    navigate("/register")
    return;
   }
  const data = {
    userId : user._id,
    email: user.email,
    fristName:user.fristName,
    applicantDetails: user,
    jobId: _id

  }
  apply(data)
  console.log(data)
 }

 

 // question
 const handleQuestion = (data) => {
  const quedata = {
    ...data,
    userId : user._id,
    email : user.email,
    jobId : _id
  }
  askQuestion(quedata)
  console.log(quedata)
  reset()
}

const handleReply = (id) => {
  const replydata = {
   
   reply,
   userId : id
  }
  sendReply(replydata)
  console.log(replydata)
  
  
}
const handleClose = () => {
 const data = {
    jobId: _id

  }
  closePosition(data)
 }
const handleOpen = () => {
 
 const data = {
    jobId: _id

  }
  openPosition(data)
 }

  return (
   
      <div className='pt-14 grid grid-cols-12 gap-5'>
        <div className='col-span-9 mb-10'>
          <div className='h-80 rounded-xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={meeting} alt='' />
          </div>
          <div className='space-y-5'>
            <div className='flex justify-between items-center mt-5'>
              <h1 className='text-xl font-semibold text-primary'>{position}</h1>
              {/* <h1 className='text-xl font-semibold text-primary'>{applicants.email}</h1>
             */}
             {user.role === "employer" ? 
             ( <div>
             {
              status === "open" ? (<button className='btn' onClick={handleClose}>Close This position</button>)
              : (<button className='btn' onClick={handleOpen}> Open This position</button>)
             }
             </div>
            ): 
            (<div>
               {
              status === "closed" ? (<div><button disabled className='btn'>Apply</button>
              <button className='btn'>This position is currently closed</button></div> )
              : (<button className='btn' onClick={handleApply}>Apply</button>)
               
             } 
            </div>)}
            
            
            </div>
            <div>
              <h1 className='text-primary text-lg font-medium mb-3'>Overview</h1>
              <p>{overview}</p>
              <p className='text-primary text-lg font-medium mb-3'>{status}</p>
              { user.role === "employer" && <div>
            <h1>Applicants:</h1> 
              {applicants?.map((applicant, {id})=> <div>
                <h1>{id}</h1>
              <button className='btn' onClick={() => navigate(`/applicant/${applicant.id}`)}>
                  {applicant?.applicantDetails?.firstName}
                  
                 </button>
             </div>) }
              
              </div>}
            
             
            </div>
            {user.role === "employer" &&  
            <div>
              <h2>Total applicants:{totalApplicants?.length}</h2>
             {/* {applicantDetails?.map(({fristName})=> <div><h2>{fristName}</h2></div>)}  */}
             <h2>{user.fristName}</h2>
              </div>}
              
            <div>
              <h1 className='text-primary text-lg font-medium mb-3'>Skills</h1>
              {/* <ul>
                {skills.map((skill) => (
                  <li className='flex items-center'>
                    <BsArrowRightShort /> <span>{skill}</span>
                  </li>
                ))}
              </ul> */}
            </div>
            <div>
              <h1 className='text-primary text-lg font-medium mb-3'>
                Requirements:{ requirements}
              </h1>
              {/* <ul>
                {requirements.map((skill) => (
                  <li className='flex items-center'>
                    <BsArrowRightShort /> <span>{skill}</span>
                  </li>
                ))}
              </ul> */}
            </div>
            <div>
              <h1 className='text-primary text-lg font-medium mb-3'>
                Responsibilities:{responsibilities}
              </h1>
              {/* <ul>
                {responsibilities.map((skill) => (
                  <li className='flex items-center'>
                    <BsArrowRightShort /> <span>{skill}</span>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
          <hr className='my-5' />
           <div>
            <div>
              <h1 className='text-xl font-semibold text-primary mb-5'>
                General Q&A
              </h1>
              <div className='text-primary my-2'>
                {
                queries?.map(({id, question,email,reply})=>(
                  <div>
                    <small>{email}</small>
                    <p>{question}</p>
                    
                    
                    {reply?.map((item) => (
                    <p className='flex items-center gap-2 relative left-5'>
                      <BsArrowReturnRight /> {item}
                    </p>
                  ))}
                   { user.role === "employer" && (<div className='flex gap-3 my-5'>
                      <input onBlur={(e)=> setReply(e.target.value)} placeholder='Reply' type='text' className='w-full' />
                      <button 
                        className='shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white'
                        type='button' onClick={()=> handleReply(id)}
                      >
                        <BsArrowRightShort size={30} />
                      </button>
                    </div>)}
                   
                    </div>
                ))
                } 
                  
               
                 
                
              </div>
               { user.role === "candidate" && (<form onSubmit={handleSubmit(handleQuestion)}>
               <div className='flex gap-3 my-5'>
                <input
                  placeholder='Ask a question...'
                  type='text'
                  className='w-full'
                  {...register("question")}
                />
                <button
                  className='shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white'
                  type='submit'
                >
                  <BsArrowRightShort size={30} />
                </button>
              </div>
               </form>)}
             
            </div>
          </div> 
        </div>
        <div className='col-span-3'>
          <div className='rounded-xl bg-primary/10 p-5 text-primary space-y-5'>
            <div>
              <p>Experience</p>
              <h1 className='font-semibold text-lg'>{experience}</h1>
            </div>
            <div>
              <p>Work Level</p>
              <h1 className='font-semibold text-lg'>{workLevel}</h1>
            </div>
            <div>
              <p>Employment Type</p>
              <h1 className='font-semibold text-lg'>{employmentType}</h1>
            </div>
            <div>
              <p>Salary Range</p>
              <h1 className='font-semibold text-lg'>{salaryRange}</h1>
            </div>
            <div>
              <p>Location</p>
              <h1 className='font-semibold text-lg'>{location}</h1>
            </div>
          </div>
          <div className='mt-5 rounded-xl bg-primary/10 p-5 text-primary space-y-5'>
            <div>
              <h1 className='font-semibold text-lg'>{companyName}</h1>
            </div>
            <div>
              <p>Company Size</p>
              <h1 className='font-semibold text-lg'>Above 100</h1>
            </div>
            <div>
              <p>Founded</p>
              <h1 className='font-semibold text-lg'>2001</h1>
            </div>
            <div>
              <p>Email</p>
              <h1 className='font-semibold text-lg'>company.email@name.com</h1>
            </div>
            <div>
              <p>Company Location</p>
              <h1 className='font-semibold text-lg'>Los Angeles</h1>
            </div>
            <div>
              <p>Website</p>
              <a className='font-semibold text-lg' href='#'>
              https://website.com
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
     
    


export default JobDetails;
