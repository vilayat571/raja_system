import { BsCartCheck } from "react-icons/bs";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import Welcome from "./Welcome";
function Header() {
  return (
    <div className="flex flex-col  h-screen w-full z-3 absolute top-0 ">
      <div className=" xl:px-32 lg:px-32 md:px-32 sm:px-4 w-full flex justify-between items-center h-12 border-white border-b-[1.5px] text-white">
        <div className="flex justify-between items-center   ">
          <div className="flex items-center text-sm ">
            <FaPhone className="" />
            <span className="ml-1">(+994) 51 998 9889</span>
          </div>
          <span className="h-12 border-white border-[0.5px] mx-4 "></span>
          <div className="flex items-center ">
            <FaEnvelope />
            <span className="ml-1">rajarestauran@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center ">
          <BsCartCheck className="text-lg mr-1" />
          Cart
        </div>
      </div>

  <Welcome />
    </div>
  );
}

export default Header;
