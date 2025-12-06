import React from "react";
import { Link } from "react-router-dom";


// link and navLink

function Home() {
  return (
    <>
      {/* hero Section */}
      <section className="m-4 lg:flex lg:justify-between">
        <div>
          <div className="">
            <h1 className="text-3xl font-medium">Dharmendra Chauhan</h1>
            <p className="text-xl ">
              I craft responsive, user-friendly web experiences by blending
              clean code with modern design. <br />
              Building sleek, scalable interfaces that bring ideas to life with
              modern frontend technologies.
            </p>
            </div>
          <div className="flex gap-2 my-4">
            <Link to={"https://github.com/dharmendrachauhan-dev"}
            target="_blank"
            rel="noopener norefferrer"
            >
            <img
              src="/socialimages/github.png"
              alt="github icon"
              className="size-12 cursor-pointer"
            />
            </Link>
            <Link to={ "https://bsky.app/profile/dharmendraji.bsky.social" }
            target="_blank"
            rel="noopener norefferrer"
            >
            <img
              src="/socialimages/blueSky.png"
              alt="bluesky icon"
              className="size-12 cursor-pointer"
            />
            </Link>
            <Link to={"https://x.com/dharmchauhanji"}
            target="_blank"
            rel="noopener norefferrer"
            >
            <img 
            src="/socialimages/x.png" 
            alt="X Icon" 
            className="size-12 cursor-pointer" 
            />
            </Link>
            <Link to={"https://www.linkedin.com/in/dharmendraji-dev/"}
            target="_blank"
            rel="noopener norefferrer"
            >
            <img
              src="/socialimages/LinkedIn.png"
              alt="linkdin icon"
              className="size-12 cursor-pointer"
            />
            </Link>
            </div>
          <div className="mb-4">

          {/* Used Anchor tag for Download Purpose bzc link dont provide*/}

          <a 
          href="/resume/dharmendra_chauhan_resume.pdf"
          download="dharmendra_chauhan_resume"
          target="_blank"
          >
            <button className="bg-blueLogo text-xl font-medium rounded cursor-pointer px-4 py-3 text-white hover:bg-blueLogoCol">
              Download CV
            </button>
          </a>
            </div>
        </div>

          <div>
            <div className="grid grid-cols-2 gap-3 items-center">
              <div className="bg-blueLogo inline-block p-2 rounded-2xl">
                <img src="/techSkillIcon/css.png" 
                alt="css icon"
                className="md:w-32 lg:w-40"
                />
              </div>
              <div className="bg-yellow-300 inline-block p-2 rounded-2xl">
                <img
                  src="/techSkillIcon/javascript.png"
                  alt=" javascript icon"
                  className="md:w-32 lg:w-40"
                />
              </div>
              <div className="bg-slate-200 inline-block p-2 rounded-2xl">
                <img src="/techSkillIcon/react.png" 
                alt="react icon" 
                className="md:w-32 lg:w-40"
                />
              </div>
              <div className="bg-slate-200 inline-block p-2 rounded-2xl">
                <img 
                src="/techSkillIcon/tailwind.png" 
                alt="tailwind icon" 
                className="md:w-32 lg:w-40"
                />
              </div>
            </div>
          </div>

      </section>
    </>
  );
}

export default Home;
