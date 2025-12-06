import React from 'react'


function Education() {
    return (
       <div className='font-mono'>
        <div>
            <h2 className="text-4xl font-bold text-cyan-600 text-center mb-10">Education</h2>
        </div>
        <div className='flex flex-col md:flex md:flex-row md:justify-center gap-4 text-white mx-3 mb-3'>       
            <div className='bg-blueLogo border border-slate-400 px-10 py-20 rounded-3xl'>
               <h1 className='text-xl mb-4'>Tech Education :</h1> 
               <p>Full Stack Dveloper Certification By Angela Yu</p>
               <h2>Self Study</h2>
               <p>Like YouTube and Online Courses</p>
                <a 
               href="https://www.udemy.com/certificate/UC-e25c95d6-f2d5-494b-9ec1-5ea032309246/" 
               target="_blank" 
               rel="noopener noreferrer"
               >
                <button className='bg-emerald-400 p-2 text-lg rounded text-center mt-3 cursor-pointer'>Download Certificate</button>
               </a>
            </div> 
            <div className='bg-blue-300 border border-slate-400 px-10 py-20 rounded-3xl'>
               <h1 className='text-xl mb-4'>College Education :</h1> 
               <p>Thakur College of science and commerce</p>
               <p>Bsc Chemistry CGPA : 7.45</p>
               <p>Class 12th Std : 54.20 %</p>
               <a 
               href="https://mu.ac.in/index.php" 
               target="_blank" 
               rel="noopener noreferrer"
               >
                <button className='bg-yellow-400 p-2 text-lg rounded text-center mt-3 cursor-pointer'>Mumbai University</button>
               </a>
            </div> 
        </div>
        </div>
    )
}

export default Education
