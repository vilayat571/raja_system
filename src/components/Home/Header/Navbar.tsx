import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { INavData, navData } from "../../../constants/Navbar/Hrefs";
import HrefOfnav from "../../../atoms/Navbar/HrefOfnav";
import "../../../assets/styles/index.css";

function Navbar() {
  const [mode, setMode] = useState<boolean>(false);

  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className=" 
    tracking-wide py-3
    xl:mx-32 lg:mx-32 md:mx-32 sm:px-2 
    w-full flex justify-between items-center"
      >
        <img src={logo} className="" alt="the logo of rajam restaurant" />

        <div
          id="nav"
          className="
      flex text-lg justify-between
      xl:block lg:block sm:hidden md:hidden"
        >
          {navData.map((navItem: INavData) => {
            return (
              <HrefOfnav
                text={navItem.text}
                key={navItem.id}
                href={navItem.href}
              />
            );
          })}
        </div>

        <a
          href="https://wa.me/994507269899"
          className="px-4 mr-4 py-2 text-sm 
          border-white rounded border-[1px]
           xl:block lg:block sm:hidden md:hidden"
          target="blank"
          aria-label="Phone number: +994507269899"
        >
          Call Us
        </a>

        {mode ? (
          <FaTimes
            onClick={() => changeMode()}
            className="
          text-xl mr-8
          xl:hidden lg:hidden sm:block cursor-pointer  md:hidden
      "
          />
        ) : (
          <FaBars
            onClick={() => changeMode()}
            className="
          text-xl mr-8
          xl:hidden lg:hidden sm:block cursor-pointer md:hidden
      "
          />
        )}

        {mode && (
          <div
            onClick={() => setMode(false)}
            className="
      flex flex-col pt-12 px-4 text-lg  
      fixed left-0 top-0 h-screen 
      w-full z-10 bg-[#141414]  
      "
          >
            <img
              src={logo}
              alt="the logo of raja restaurant"
              className=" h-auto w-[183px]
              relative right-4"
            />
            <div className="flex flex-col gap-1 text-xl ml-1 mt-4">
              {navData.map((navItem: INavData) => {
                return (
                  <HrefOfnav
                    text={navItem.text}
                    key={navItem.id}
                    href={navItem.href}
                  />
                );
              })}

              <a
                href="https://wa.me/994507269899"
                className="px-4 ml-5 mt-1 py-2 text-sm 
          border-white rounded border-[1px]
           w-24 text-center"
                target="blank"
                aria-label="Phone number: +994507269899"
              >
                Call Us
              </a>

              <button
                className=" cursor-pointer 
            absolute bottom-20 text-sm rounded
            border-white border-[1px] 
            px-4 py-2 ml-4 w-24 text-center"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
