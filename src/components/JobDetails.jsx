import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { addToDb } from "../utilities/fakedb";

const JobDetails = () => {
  const allJobs = useLoaderData();
  const { id } = useParams();
  const newId = parseInt(id);
  console.log(newId)
  const singleJob = allJobs.find(data => (data.id === newId));

  const { jobDescription, responsibilities, educationReq, experience, salary, jobTitle, location, contactPhone, contactEmail } = singleJob;
  
  const handleApplyNowClick = () => {
    addToDb(newId);
    // console.log(addToDb)
    toast.success("Application Successful")
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <img src="https://i.ibb.co/fQbYK30/Vector.png" alt="" />
        </div>
        <h2 className="text-3xl text-center font-bold">Job Details</h2>
        <div className="-mt-72 ">
          <img src="https://i.ibb.co/C7cGNzg/Vector-1.png" alt="" />
        </div>
      </div>
    {/* job info */}
    <div className='md:flex gap-5 m-16 w-5/6 mx-auto'>
        <div className='w-2/3'>
          <p className=' mb-5'> <span className='text-lg font-semibold'>Job Description :</span> {jobDescription}</p>
          <p className=' mb-5'> <span className='text-lg font-semibold'>Job Responsibility :</span> {responsibilities}</p>
          <p className='text-lg font-semibold'>Educational Requirements</p>
          <p className=' mb-5'>{educationReq}</p>
          <p className='text-lg font-semibold'>Experiences</p>
          <p>{experience}</p>
        </div>
        <div className='md:w-1/3'>
          <div className='bg-gradient-to-r from-[#7e8ffe2a] to-[#9873ff34] rounded-md p-8'>
            <h3 className='text-lg font-bold'>Job Details</h3>
            <hr className='border-gray-300 border my-2' />
            <img className='inline' src="" alt="" />
            <p className='inline text-lg font-semibold'>Salary : <span className='text-gray-600 font-normal'>{salary}</span></p>
            <br />
            <img className='inline my-3' src="" alt="" />
            <p className='inline text-lg font-semibold'>Job Title : <span className='text-gray-600 font-normal'>{jobTitle}</span></p>
            <h3 className='text-lg font-bold mt-2'>Contact Information</h3>
            <hr className='border-gray-300 border my-2' />
            <img className='inline' src="" alt="" />
            <p className='inline text-lg font-semibold'>Phone : <span className='text-gray-600 font-normal'>{contactPhone}</span></p>
            <br />
            <img className='inline my-3' src="" alt="" />
            <p className='inline text-lg font-semibold'>Email : <span className='text-gray-600 font-normal'>{contactEmail}</span></p>
            <br />
            <img className='inline' src="" alt="" />
            <p className='inline text-lg font-semibold'>Address : <span className='text-gray-600 font-normal'>{location}</span></p>
          </div>
          <button onClick={handleApplyNowClick} className='btn-default w-full mt-5 bg-purple-600 py-3 rounded-lg text-white'>Apply Now</button> <ToastContainer></ToastContainer>
        </div>
      </div>

    </div>
  );
};

export default JobDetails;
