import { NavLink } from 'react-router-dom'


function Header() {



  return (
    <header>
      <nav className="flex justify-between items-center ml-10 mr-10">
        <div>
          <h1 className='text-4xl font-bold text-cyan-600'>#PORTFOLIO</h1>
        </div>
        <div className="">
          <ul className="flex justify-center items-center gap-10">
            <li>
              <NavLink
              to="/"
              className={({isActive}) => 
                `${isActive ? "text-blueLogo" : "text-black"} font-medium text-xl rounded text-black cursor-pointer hover:text-blueLogo` 
            }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/contact"
              className={({isActive}) => 
                `${isActive ? "text-blueLogo" : "text-black"} font-medium text-xl rounded text-black cursor-pointer hover:text-blueLogo` 
            }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/about"
              className={({isActive}) => 
                `${isActive ? "text-blueLogo" : "text-black"} font-medium text-xl rounded text-black cursor-pointer hover:text-blueLogo` 
            }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/education"
              className={({isActive}) => 
                `${isActive ? "text-blueLogo" : "text-black"} font-medium text-xl rounded text-black cursor-pointer hover:text-blueLogo` 
            }
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/project"
              className={({isActive}) => 
                `${isActive ? "text-blueLogo" : "text-black"} font-medium text-xl rounded text-black cursor-pointer hover:text-blueLogo` 
              }
              >
                Project
              </NavLink>
            </li>
            
            <li>
              <NavLink
              to="/skill"
              className={({isActive}) =>
                `${isActive ? "text-blueLogo" : "text-black"} font-medium text-xl rounded text-black cursor-pointer hover:text-blueLogo`
              }
              >
                Skill
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
