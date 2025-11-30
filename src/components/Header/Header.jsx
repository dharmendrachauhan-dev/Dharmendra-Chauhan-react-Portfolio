import websiteLogo from '/src/assets/Website-logo.png'
function Header() {
    return (
    <div className="flex justify-between items-center ml-10 mr-10">
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
    )
}

export default Header
