import React from 'react'
import JobCard from './JobCard';
import JobData from './DummyJobData'
import JobForm from './JobForm'
import { Link } from 'react-router-dom';

function JobPortal() {
  return (
    <div
    id="JobPortal"
    className="min-w-screen flex min-h-screen flex-col items-center justify-start bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 font-black max-sm:min-w-[450px] pt-4 shadow-md shadow-stone-300">
    <div className='mt-4 text-3xl font-bold'>Help your Peers and Alma-better</div>
    <div className='mb-6 mt-3'><Link to="/jobform"><button className='text-2xl text-gray-200 bg-blue-500 px-6 py-1 border border-white rounded-md shadow-md'>Post a new Job Today</button></Link></div>
    <hr />
    <div className='font-poppins text-4xl'>Search and Apply to Your</div>
    <div className='font-poppins text-3xl'><span className=" text-emerald-500 text-6xl">Dream Job </span> Today</div>
    <div className="searchbar flex mt-10 gap-4">
      <select className=" w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md" id="">
          <option value="" disabled hidden selected>Job Role</option>
          <option value="IOS Developer">IOS Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Blockchain Developer">Blockchain Developer</option>
      </select>
      <select className=" w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md" id="">
          <option value="" disabled hidden selected>Job Type</option>
          <option value="IOS Developer">Full Time</option>
          <option value="Android Developer">Contract</option>
          <option value="Frontend Developer">Internship</option>
      </select>
      <select className=" w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md" id="">
          <option value="" disabled hidden selected>Location</option>
          <option value="IOS Developer">In Office</option>
          <option value="Android Developer">Remote</option>
          <option value="Frontend Developer">Work From Home</option>
      </select>
      <select className=" w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md" id="">
          <option value="" disabled hidden selected>Experience</option>
          <option value="IOS Developer">Fresher</option>
          <option value="Android Developer">1-3 years</option>
          <option value="Frontend Developer">3-5 years</option>
          <option value="Backend Developer">5+ years</option>
      </select>
      
      <button className="w-64 font-bold rounded-md bg-blue-500 py-3 text-white">Search</button>
    </div>
    <div className='w-full mt-8'>
      {JobData.map((job) => (
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
  </div>
  )
}

export default JobPortal;