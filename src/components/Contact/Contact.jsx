import React from "react";
import phone from "/src/assets/Contact/phone-call.png";
import email from "/src/assets/Contact/email.png";
import gps from "/src/assets/Contact/gps.png";

function Contact() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mb-10 font-mono">
        <h1 className="text-6xl font-medium text-cyan-600">Get In Touch</h1>
        <p className="mt-2"> Thanks for coming to contact Section.</p>
      </div>
 
    {/* Contact Information */}

      <div className="grid grid-cols-2 gap-6 ml-10 mr-10 font-mono">
        <div className="bg-blueLogo text-white p-10 rounded-xl">
          <div>
            <h1 className="text-2xl font-medium">Contact Information</h1>
            <p className="text-sm mt-2">Wanted to work together you can give a call.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mt-4">
              <img
                src={phone}
                alt="phone png"
                className="size-12 bg-white rounded-full"
              />
              <p>+91 9967758893</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <img
                src={email}
                alt="email png"
                className="size-12 bg-white rounded-full"
              />
              <p>dmma359800@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 mt-4 ">
              <img
                src={gps}
                alt="gps png"
                className="size-12 bg-white rounded-full"
              />
              <p>Kandivali East, Mumbai, India</p>
            </div>
          </div>
        </div>

    {/* form section */}

          <form action="./" className="bg-blue-200 p-10 rounded-xl font-mono">
            <div>
              <label htmlFor="name" className="text-lg block mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="bg-white border border-slate-300 px-1 py-1 w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-blueLogoCol"
                placeholder="e.g. John Doe"
              />
            </div>
            <div>
              <label htmlFor="name" className="text-lg block mb-1 mt-1">
                Email
              </label>
              <input
                id="email"
                type="text"
                className="bg-white border border-slate-300 px-1 py-1 w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-blueLogoCol"
                placeholder="hallo@gmail.com"
              />
            </div>
            <div>
              <label 
              htmlFor="Subject" className="text-lg block mb-1 mt-1">
                Subject
              </label>
              <input
                id="name"
                type="text"
                className="bg-white border border-slate-300 px-1 py-1 w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-blueLogoCol"
                placeholder="eg. Be happy !"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-lg block mb-1 mt-1 relative">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-white w-full focus:outline-none focus:ring-2 focus:ring-blueLogo rounded p-1"
                placeholder="write message here !"
              ></textarea>
            </div>
            <div className="">
              <input 
              type="button" 
              value="Submit"
              className="bg-blueLogo text-white py-2 mt-4 rounded text-lg w-full hover:bg-blueLogoCol hover:scale-105 transition duration-400 ease-in-out cursor-pointer" 
              />
            </div>
          </form>
        </div>
    </section>
  );
}

export default Contact;
