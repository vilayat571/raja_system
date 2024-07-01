import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { INavData, navData } from "../../../constants/Navbar/Hrefs";
import HrefOfnav from "../../../atoms/Navbar/HrefOfnav";

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
        <img
          src={logo}
          className="w-48 h-24"
          alt="the logo of raja restaurant"
        />

        <div
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
          href="https://wa.me/"
          className="px-4 mr-4 py-2 text-sm 
        border-white rounded border-[1px]
         xl:block lg:block sm:hidden md:hidden"
        >
          Reservation
        </a>

        {mode ? (
          <FaTimes
            onClick={() => changeMode()}
            className="
          text-xl mr-8
          xl:hidden lg:hidden sm: md:hidden
      "
          />
        ) : (
          <FaBars
            onClick={() => changeMode()}
            className="
          text-xl mr-8
          xl:hidden lg:hidden sm: md:hidden
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
              className="w-48 h-24 relative right-4"
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

              <button
                className=" cursor-pointer 
            absolute bottom-12 text-sm
            border-white border-[1px] 
            px-4 py-2 ml-4"
              >
                {" "}
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
