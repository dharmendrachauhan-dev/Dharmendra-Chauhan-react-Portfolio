import React from "react";
import Porfolioimage from "/src/assets/Projectimg/Porfolio Cover page.jpg";

function Project() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-cyan-600 text-center">
        Project
      </h1>
      <div className="flex flex-col flex-wrap  items-center font-mono text-white">
        <div className="bg-blueLogo px-5 py-4 rounded-2xl">
          <div>
            <h1 className="text-center text-xl py-3">Portfolio Website</h1>
            <img
              src={Porfolioimage}
              alt="Porfolio image"
              className=" w-80 rounded-xl "
            />
          </div>
          <div className="flex flex-col flex-wrap max-w-80">
            <p className="text-lg font-light">
              Personal Website built using ReactJS and Tailwind CSS with smooth
              Scroll and Animation.
            </p>
            <span className="text-sm">
              Tech Stack: ReactJS, Tailwind CSS and Vite
            </span>
            <input
              id="button"
              type="button"
              value="view in github"
              className="bg-green-400 px-4 py-2 rounded-2xl border hover:bg-green-500 cursor-pointer mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
