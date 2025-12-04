import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md">
      <nav className="flex justify-between items-center md:mx-10 mx-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-600">#PORTFOLIO</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-10">
          <li>
            <NavLink to="/" className={({ isActive }) =>
              `${isActive ? "text-blueLogo" : "text-black"} font-medium text-xl hover:text-blueLogo`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) =>
              `${isActive ? "text-blueLogo" : "text-black"} font-medium text-xl hover:text-blueLogo`}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) =>
              `${isActive ? "text-blueLogo" : "text-black"} font-medium text-xl hover:text-blueLogo`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={({ isActive }) =>
              `${isActive ? "text-blueLogo" : "text-black"} font-medium text-xl hover:text-blueLogo`}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className={({ isActive }) =>
              `${isActive ? "text-blueLogo" : "text-black"} font-medium text-xl hover:text-blueLogo`}>
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/skill" className={({ isActive }) =>
              `${isActive ? "text-blueLogo" : "text-black"} font-medium text-xl hover:text-blueLogo`}>
              Skill
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-white shadow-lg">
          <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
          <li><NavLink to="/education" onClick={() => setIsOpen(false)}>Education</NavLink></li>
          <li><NavLink to="/project" onClick={() => setIsOpen(false)}>Project</NavLink></li>
          <li><NavLink to="/skill" onClick={() => setIsOpen(false)}>Skill</NavLink></li>
        </ul>
      )}
    </header>
  );
}
