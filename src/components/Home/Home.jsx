import React from "react";
import xIcon from "/src/assets/socialimages/X.png";
import linkdinIcon from "/src/assets/socialimages/LInkDin.png";
import blueSky from "/src/assets/socialimages/blueSky.png";
import github from "/src/assets/socialimages/GitHub.png";
import css from "/src/assets/techSkillIcon/CSS3.png";
import javascript from "/src/assets/techSkillIcon/JavaScript.png";
import react from "/src/assets/techSkillIcon/React.png";
import tailwind from "/src/assets/techSkillIcon/Tailwind.png";
import { Link } from "react-router-dom";
import mypdf from "/src/assets/resume/dharmendra_chauhan_resume.pdf"

// link and navLink

function Home() {
  return (
    <>
      {/* hero Section */}
      <section className="flex justify-between mr-10 ml-10 mt-10 font-mono">
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
            <Link to={"https://github.com/dharmendrachauhan-dev"}
            target="_blank"
            rel="noopener norefferrer"
            >
            <img
              src={github}
              alt="github icon"
              className="size-12 cursor-pointer"
            />
            </Link>
            <Link to={ "https://bsky.app/profile/dharmendraji.bsky.social" }
            target="_blank"
            rel="noopener norefferrer"
            >
            <img
              src={blueSky}
              alt="bluesky icon"
              className="size-12 cursor-pointer"
            />
            </Link>
            <Link to={"https://x.com/dharmchauhanji"}
            target="_blank"
            rel="noopener norefferrer"
            >
            <img 
            src={xIcon} 
            alt="X Icon" 
            className="size-12 cursor-pointer" 
            />
            </Link>
            <Link to={"https://www.linkedin.com/in/dharmendraji-dev/"}
            target="_blank"
            rel="noopener norefferrer"
            >
            <img
              src={linkdinIcon}
              alt="linkdin icon"
              className="size-12 cursor-pointer"
            />
            </Link>
          </div>
          <div className="mt-4 ">

          {/* Used Anchor tag for Download Purpose bzc link dont provide*/}

          <a 
          href={mypdf}
          download="dharmendra_chauhan_resume"
          target="_blank"
          >
            <button className="bg-blueLogo text-xl font-medium rounded cursor-pointer px-4 py-3 text-white hover:bg-blueLogoCol">
              Download CV
            </button>
          </a>
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
