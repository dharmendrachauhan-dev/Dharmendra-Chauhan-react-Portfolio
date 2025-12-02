import React from 'react'


function Education() {
    return (
       <div>
        <div className=''>
            <h2 className="text-4xl font-bold mb-4 text-cyan-600 text-center">Education</h2>
        </div>
        <div className=' font-mono flex justify-center items-center h-screen gap-2 text-white'>
            <div className='bg-blueLogo border border-slate-400 px-15 py-30 rounded-3xl'>
               <h1 className='text-lg'>Tech Education</h1> 
               <p>Full Stack Dveloper Certification By Angela Yu</p>
               <h2>Self Study</h2>
               <p>Like YouTube and Online Courses</p>
            </div> 
            <div className='bg-blue-300 border border-slate-400 px-15 py-33 rounded-3xl'>
               <h1>School Education</h1> 
               <p>Thakur College of science and commerce</p>
               <p>Bsc Chemistry CGPA : 7.45</p>
            </div> 
        </div>
        </div>
    )
}

export default Education
