import React from "react";
import { Link } from "react-router-dom";
import CSS from "/src/assets/techSkillIcon/CSS3.png";
import Mongo from "/src/assets/techSkillIcon/MongoDB.png";
import Node from "/src/assets/techSkillIcon/Node.js.png";
import Javascript from "/src/assets/techSkillIcon/JavaScript.png";
import Postgres from "/src/assets/techSkillIcon/Postegres.png";
import Reactimage from "/src/assets/techSkillIcon/React.png";
import Tailwind from "/src/assets/techSkillIcon/Tailwind.png";
import Sql from "/src/assets/techSkillIcon/sql.png";

function Skill() {
  return (
    <div className="grid font-mono">
      <h2 className="text-4xl font-bold mb-10 text-cyan-600 text-center">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 gap-2 mx-auto">

        {/* Language , Framework and stylesheet */}

        <div className="bg-blueLogoCol text-white rounded-xl p-7">
          <h2 className="text-2xl font-medium mb-5">Langauge & Framework</h2>
          <div className="flex gap-2 mt-2 items-center">
            <img src={Javascript} alt="" className="w-10" />
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
            <img src={Node} alt="" className="w-10" />
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
            <img src={Reactimage} alt="" className="w-10" />
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

        {/* DataBase Section */}

        <div className="bg-blue-300 text-white rounded-xl p-7">
          <h2 className="text-2xl font-medium mb-5">Database</h2>
          <div className="flex gap-2 mt-2 items-center">
            <img src={Mongo} alt="" className="w-10" />
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
            <img src={Postgres} alt="" className="w-10" />
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
            <img src={Sql} alt="" className="w-10" />
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

        {/* Styling Tools */}

        <div className="bg-blueLogoCol text-white rounded-xl p-12">
          <h2 className="text-2xl font-medium mb-5">Web Styling Tool</h2>
          <div className="flex gap-2 mt-2 items-center">
            <img src={Tailwind} alt="" className="w-10 bg-white rounded-3xl" />
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
            <img src={CSS} alt="" className="w-10" />
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

        {/* Soft Skill */}

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
