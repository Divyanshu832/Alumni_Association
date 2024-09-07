import React from 'react'
import DirCard from './DirCard';
import JobData from './DummyDirData'
import DirForm from './DirForm'
import { Link } from 'react-router-dom';
import './DirPortal.css'
function DirPortal() {
  return (
    <div
    id="JobPortal"
    className="min-w-screen flex min-h-screen flex-col items-center justify-start bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 font-black max-sm:min-w-[450px] pt-4 shadow-md shadow-stone-300">
  

    <hr />
    {/* <div className='font-poppins text-4xl mt-16'>Alumni Directory</div> */}
    <div className='font-poppins text-4xl mt-20'><span className=" text-emerald-500 text-6xl">Alumni Directory </span> </div>
    <div className="searchbar flex mt-10 gap-4">
      {/* <select className=" w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md" id="">
          <option value="" disabled hidden selected>Job Role</option>
          <option value="IOS Developer">IOS Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Blockchain Developer">Blockchain Developer</option>
      </select> */}
      <select className=" w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md" id="">
          <option value="" disabled hidden selected>Batch</option>
          <option value="IOS Developer">1994</option>
          <option value="Android Developer">1995</option>
          <option value="Frontend Developer">1996</option>
          <option value="Frontend Developer">1997</option>
          <option value="Frontend Developer">1998</option>
          <option value="Frontend Developer">1999</option>
          <option value="Frontend Developer">2000</option>
          <option value="Frontend Developer">2001</option>
          <option value="Frontend Developer">2002</option>
          <option value="Frontend Developer">2003</option>
          <option value="Frontend Developer">2004</option>
          <option value="Frontend Developer">2005</option>
          <option value="Frontend Developer">2006</option>
          <option value="Frontend Developer">2007</option>
          <option value="Frontend Developer">2008</option>
          <option value="Frontend Developer">2009</option>
          <option value="Frontend Developer">2010</option>
          <option value="Frontend Developer">2011</option>
          <option value="Frontend Developer">2012</option>
          <option value="Frontend Developer">2013</option>
          <option value="Frontend Developer">2014</option>
          <option value="Frontend Developer">2015</option>
          <option value="Frontend Developer">2016</option>
          <option value="Frontend Developer">2017</option>
          <option value="Frontend Developer">2018</option>
          <option value="Frontend Developer">2019</option>
          <option value="Frontend Developer">2020</option>
          <option value="Frontend Developer">2021</option>
          <option value="Frontend Developer">2022</option>
          <option value="Frontend Developer">2023</option>
          <option value="Frontend Developer">2024</option>
      </select>
      <select className=" w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md" id="">
          <option value="" disabled hidden selected>Location</option>
          <option value="IOS Developer">INDIA</option>
          <option value="Android Developer">USA</option>
          <option value="Frontend Developer">AUSTRALIA</option>
          <option value="Frontend Developer">GERMANY</option>
          <option value="Frontend Developer">BRITIAN</option>
          <option value="Frontend Developer">RUSSIA</option>
      </select>
      {/* <select className=" w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md" id="">
          <option value="" disabled hidden selected>Experience</option>
          <option value="IOS Developer">Fresher</option>
          <option value="Android Developer">1-3 years</option>
          <option value="Frontend Developer">3-5 years</option>
          <option value="Backend Developer">5+ years</option>
      </select> */}
      <button className="w-64 font-bold rounded-md bg-blue-500 py-3 text-white">Search</button>
    </div>
    {/* <div className='w-full mt-8'>
      {JobData.map((job) => (
        <DirCard batch={1994}/>
      ))}
    </div> */}
    <div className='w-full mt-8'>
    <DirCard image={"https://th.bing.com/th?id=OIP.Syx0eZ4EBKhJ6mIZkw_f6AHaGL&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} name={"Mr. Sundar Pichai"} achievement={"Led the development of Google Chrome, CEO of Google since 2015, CEO of Alphabet since 2019"} designation={"CEO of Alphabet Inc. and Google"} country={"California, USA"} batch={1994}/>
    <DirCard image={"https://th.bing.com/th?id=OIP.Syx0eZ4EBKhJ6mIZkw_f6AHaGL&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} name={"Mr. Sundar Pichai"} achievement={"Led the development of Google Chrome, CEO of Google since 2015, CEO of Alphabet since 2019"} designation={"CEO of Alphabet Inc. and Google"} country={"California, USA"} batch={1994}/>
    <DirCard image={"https://th.bing.com/th?id=OIP.Syx0eZ4EBKhJ6mIZkw_f6AHaGL&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} name={"Mr. Sundar Pichai"} achievement={"Led the development of Google Chrome, CEO of Google since 2015, CEO of Alphabet since 2019"} designation={"CEO of Alphabet Inc. and Google"} country={"California, USA"} batch={1994}/>
    <DirCard image={"https://th.bing.com/th?id=OIP.Syx0eZ4EBKhJ6mIZkw_f6AHaGL&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} name={"Mr. Sundar Pichai"} achievement={"Led the development of Google Chrome, CEO of Google since 2015, CEO of Alphabet since 2019"} designation={"CEO of Alphabet Inc. and Google"} country={"California, USA"} batch={1994}/>
    <DirCard image={"https://th.bing.com/th?id=OIP.Syx0eZ4EBKhJ6mIZkw_f6AHaGL&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} name={"Mr. Sundar Pichai"} achievement={"Led the development of Google Chrome, CEO of Google since 2015, CEO of Alphabet since 2019"} designation={"CEO of Alphabet Inc. and Google"} country={"California, USA"} batch={1994}/>
    <DirCard image={"https://th.bing.com/th?id=OIP.Syx0eZ4EBKhJ6mIZkw_f6AHaGL&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} name={"Mr. Sundar Pichai"} achievement={"Led the development of Google Chrome, CEO of Google since 2015, CEO of Alphabet since 2019"} designation={"CEO of Alphabet Inc. and Google"} country={"California, USA"} batch={1994}/>
    <DirCard image={"https://th.bing.com/th?id=OIP.Syx0eZ4EBKhJ6mIZkw_f6AHaGL&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} name={"Mr. Sundar Pichai"} achievement={"Led the development of Google Chrome, CEO of Google since 2015, CEO of Alphabet since 2019"} designation={"CEO of Alphabet Inc. and Google"} country={"California, USA"} batch={1994}/>
    <DirCard image={"https://th.bing.com/th?id=OIP.Syx0eZ4EBKhJ6mIZkw_f6AHaGL&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} name={"Mr. Sundar Pichai"} achievement={"Led the development of Google Chrome, CEO of Google since 2015, CEO of Alphabet since 2019"} designation={"CEO of Alphabet Inc. and Google"} country={"California, USA"} batch={1994}/>

  </div>
  </div>
  )
}

export default DirPortal;