import { BsCartCheck } from "react-icons/bs";
import { FaCartArrowDown, FaEnvelope, FaPhone } from "react-icons/fa6";

const App = () => {
  return (
    <main>
      <div className="px-0">
        <div>
          <img
            src="https://wallpapers.com/images/hd/restaurant-background-ua09rq3u85yphzt4.jpg"
            className="w-full h-screen object-cover"
            alt=""
          />
          <div className="w-full h-screen bg-black opacity-60 absolute top-0"></div>
        </div>

        <div className="flex flex-col  h-screen w-full z-3 absolute top-0 ">
          <div className=" px-32 w-full flex justify-between items-center h-12 border-white border-b-[1.5px] text-white">
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

          <div
            className="text-center relative top-48 font-bold text-white 
          xl:text-[56px] lg:text-[56px] md:text-[40px] sm:text-[24px]"
          >
            Welcome
            <br />
            RaJa Indian & Azerbaijani
            <br /> Restaurant 
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
