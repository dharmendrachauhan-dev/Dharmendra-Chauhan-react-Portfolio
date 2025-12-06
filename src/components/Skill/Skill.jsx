import React from "react";
import { Link } from "react-router-dom";

function Skill() {
  return (
    <div className="grid font-mono">
      <h2 className="text-4xl font-bold mb-10 text-cyan-600 text-center">
        Tech Stack
      </h2>

      <div className="flex flex-col justify-center gap-4 mx-4 mb-2 md:grid md:grid-cols-2 md:">

        {/* Language , Framework and stylesheet Section*/}

        <div className="bg-blueLogoCol text-white rounded-xl p-7 ">
          <h2 className="text-2xl font-medium mb-5">Langauge & Framework</h2>
          <div className="flex gap-2 mt-2 items-center">
            <img src='/techSkillIcon/javascript.png' alt="" className="w-10" />
            <Link
              to={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
              target="_blank"
              rel="norefferrer noopener"
              className="text-lg hover:underline"
            >
              Javascript
            </Link>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <img src="/techSkillIcon/nodejs.png" alt="" className="w-10" />
            <Link
              to={"https://nodejs.org/en"}
              target="_blank"
              rel="noopener norefferrer"
              className="text-lg hover:underline"
            >
              Node JS
            </Link>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <img src="/techSkillIcon/react.png" alt="" className="w-10" />
            <Link
              to={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
              target="_blank"
              rel="noopener norefferrer"
              className="text-lg hover:underline"
            >
              Javascript
            </Link>
          </div>
        </div>

        {/* DataBase Skillset Section */}

        <div className="bg-blue-300 text-white rounded-xl p-7 ">
          <h2 className="text-2xl font-medium mb-5">Database</h2>
          <div className="flex gap-2 mt-2 items-center">
            <img src="/techSkillIcon/mongodb.png" alt="" className="w-10" />
            <Link
              to={"https://www.mongodb.com/"}
              target="_blank"
              rel="noopener norefferrer"
              className="text-lg hover:underline"
            >
              MongoDB
            </Link>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <img src="/techSkillIcon/postegres.png" alt="" className="w-10" />
            <Link
              to={"https://nodejs.org/en"}
              target="_blank"
              rel="noopener norefferrer"
              className="text-lg hover:underline"
            >
              PostGres
            </Link>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <img src="/techSkillIcon/sql.png" alt="" className="w-10" />
            <Link
              to={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
              target="_blank"
              rel="noopener norefferrer"
              className="text-lg hover:underline"
            >
              MySQL
            </Link>
          </div>
        </div>

        {/* Styling Tools Section*/}

        <div className="bg-blueLogoCol text-white rounded-xl p-12 ">
          <h2 className="text-2xl font-medium mb-5">Web Styling Tool</h2>
          <div className="flex gap-2 mt-2 items-center">
            <img src="/techSkillIcon/tailwind.png" alt="" className="w-10 bg-white rounded-3xl" />
            <Link
              to={"https://tailwindcss.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              Tailwind CSS
            </Link>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <img src="/techSkillIcon/css.png" alt="" className="w-10" />
            <Link
              to={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
              target="_blank"
              rel="noopener norefferrer"
              className="text-lg hover:underline"
            >
              CSS
            </Link>
          </div>
        </div>

        {/* Soft Skill  Section*/}

        <div className="bg-blue-300 text-white rounded-xl px-5 py-4">
          <h2 className="text-2xl font-medium mb-5">Soft Skill</h2>
          <div className="flex gap-2 mt-2 items-center">
            <p className="text-lg">Teamwork</p>
          </div>
          <div className="flex gap-2 mt-1 items-center">
            <p className="text-lg">Problem Solving</p>
          </div>
          <div className="flex gap-2 mt-1 items-center">
            <p className="text-lg">Critical Thinking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
