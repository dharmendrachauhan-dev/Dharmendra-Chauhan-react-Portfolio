import React from "react";
import websiteLogo from "/src/assets/Website-logo.png";
import xIcon from "/src/assets/socialimages/X.png";
import linkdinIcon from "/src/assets/socialimages/LInkDin.png";
import blueSky from "/src/assets/socialimages/blueSky.png";
import github from "/src/assets/socialimages/GitHub.png";
import css from "/src/assets/techSkillIcon/CSS3.png";
import javascript from "/src/assets/techSkillIcon/JavaScript.png";
import react from "/src/assets/techSkillIcon/React.png";
import tailwind from "/src/assets/techSkillIcon/Tailwind.png";

// link and navLink

console.log(websiteLogo);

function Home() {
  return (
    <>
      {/* Navigation Bar Star */}

      <div className="  flex justify-between items-center ml-10 mr-10 mt-5">
        <div>
          <img src={websiteLogo} alt="Website Logo" className="w-23" />
        </div>
        <div className="">
          <ul className="flex justify-center items-center gap-10">
            <li className="font-medium text-xl rounded text-black cursor-pointer hover:text-blueLogo">
              Home
            </li>
            <li className="font-medium text-xl rounded text-black cursor-pointer hover:text-blueLogo">
              Contact
            </li>
            <li className="font-medium text-xl rounded text-black cursor-pointer hover:text-blueLogo ">
              About
            </li>
            <li className="font-medium text-xl rounded text-black cursor-pointer hover:text-blueLogo ">
              Education
            </li>
            <li className="bg-blueLogo text-xl font-medium rounded cursor-pointer px-4 py-3 text-white hover:bg-blueLogoCol hover:scale-105 transition delay-200 duration-200 ease-in-out">
              Tech Skill
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation Bar End */}

      {/* hero Section */}
      <section className="flex justify-between mr-10 ml-10 mt-10">
        <div className="">
          <div className="">
            <h1 className="text-6xl font-medium">Dharmendra Chauhan</h1>
            <p className="text-xl ">
              I craft responsive, user-friendly web experiences by blending
              clean code with modern design. <br />
              Building sleek, scalable interfaces that bring ideas to life with
              modern frontend technologies.
            </p>
          </div>
          <div className="flex gap-2">
            <img
              src={github}
              alt="github icon"
              className="size-12 cursor-pointer"
            />
            <img
              src={blueSky}
              alt="bluesky icon"
              className="size-12 cursor-pointer"
            />
            <img src={xIcon} alt="X Icon" className="size-12 cursor-pointer" />
            <img
              src={linkdinIcon}
              alt="linkdin icon"
              className="size-12 cursor-pointer"
            />
          </div>
          <div className="mt-4 ">
            <button className="bg-blueLogo text-xl font-medium rounded cursor-pointer px-4 py-3 text-white hover:bg-blueLogoCol">
              Download CV
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blueLogo inline-block p-2 rounded-2xl">
                <img src={css} alt="css icon" className="size-32" />
              </div>
              <div className="bg-yellow-300 inline-block p-2 rounded-2xl">
                <img
                  src={javascript}
                  alt=" javascript icon"
                  className="size-32"
                />
              </div>
              <div className="bg-slate-200 inline-block p-2 rounded-2xl">
                <img src={react} alt="react icon" className="size-32" />
              </div>
              <div className="bg-slate-200 inline-block p-2 rounded-2xl">
                <img src={tailwind} alt="tailwind icon" className="size-32" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
