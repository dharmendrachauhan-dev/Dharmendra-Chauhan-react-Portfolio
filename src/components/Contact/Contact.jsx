import React from 'react'
import phone from '/src/assets/Contact/phone-call.png'
import email from '/src/assets/Contact/email.png'
import gps from '/src/assets/Contact/gps.png'

function Contact() {
    return (
        <section>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-6xl font-medium'>Get In Touch</h1>
                <p> Thanks for coming to contact Section.</p>
            </div>
            
            <div className='bg-blueLogo'>
                <div>
                    <h1>Contact Information</h1>
                    <p>Feel free Contact me.</p>
                </div>
                <div className=''>
                    <div>
                        <img src={ phone } alt="phone png" className='size-12'/>
                        <p>+91 9967758893</p>
                    </div>
                    <div>
                        <img src={ email } alt="email png" className='size-12'/>
                        <p>dmma359800@gmail.com</p>
                    </div>
                    <div>
                        <img src={ gps } alt="gps png" className='size-12'/>
                        <p>Kandivali East, Mumbai, India</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
