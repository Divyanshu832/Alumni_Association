import React from 'react'
import dayjs from 'dayjs';
import './DirPortal.css'
function DirCard({  image, name,designation,batch,country,achievement }) {
    
  return (
    <div className=' mx-20 '>
        <div className='flex justify-between items-center px-6   py-4 h-56 mb-6 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
            <div className='flex  items-start gap-3'>
                <img className=' w-52 rounded-xl im23 ' src={image} alt="image" />
                <div className='font-grotesk font-bold pt-2 pl-5'>
                <h1 className='text-2xl d'>{name}</h1>
                <h1 className='text-lg '>{designation}</h1>
                <h1 className='text-lg '>{country}</h1>
                <h1 className='text-lg '>{achievement}</h1>
                </div>
                {/* <div className='flex items-center gap-3'>
                {props.skills.map((skill) => (
                    <p key={skill} className='text-gray-500 border border-black py-1 px-2 rounded-md'>{skill}</p>
                ))}
                </div> */}
            </div >
            <div className='flex flex-col items-center gap-2 mb-10 mr-10 text-2xl'>
                <h1>Batch</h1>
                <p className='text-gray-500'> {batch} </p>
                
                
              
                
            </div>
            
        </div>
    </div>
  )
}

export default DirCard