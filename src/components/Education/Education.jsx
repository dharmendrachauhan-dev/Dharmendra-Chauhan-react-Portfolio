import React from 'react'


function Education() {
    return (
       <div className='font-mono'>
        <div>
            <h2 className="text-4xl font-bold text-cyan-600 text-center mb-10">Education</h2>
        </div>
        <div className='mx-auto grid grid-cols-2 max-w-3xl gap-4 text-white'>       
            <div className='bg-blueLogo border border-slate-400 px-15 py-30 rounded-3xl'>
               <h1 className='text-xl mb-4'>Tech Education :</h1> 
               <p>Full Stack Dveloper Certification By Angela Yu</p>
               <h2>Self Study</h2>
               <p>Like YouTube and Online Courses</p>
            </div> 
            <div className='bg-blue-300 border border-slate-400 px-15 py-30 rounded-3xl'>
               <h1 className='text-xl mb-4'>School Education :</h1> 
               <p>Thakur College of science and commerce</p>
               <p>Bsc Chemistry CGPA : 7.45</p>
            </div> 
        </div>
        </div>
    )
}

export default Education
