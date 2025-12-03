import React from "react";

function About() {
  return (
    <div className="font-mono">
      <h2 className="text-4xl font-bold mb-10 text-cyan-600 text-center ">About Me</h2>
      <div className="flex justify-center items-center">
        <div className="bg-blueLogo border border-slate-400 px-10 py-15 rounded-3xl max-w-4xl">
        <p className="text-lg leading-8 text-white">
          I am a passionate frontend developer with a strong interest in
          creating visually appealing and interactive web applications. I
          specialize in modern frameworks and enjoy solving UI/UX problems. My
          goal is to build fast, accessible, and responsive websites that
          deliver great user experiences.
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;
