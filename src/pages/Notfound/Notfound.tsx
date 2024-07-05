import { Link, useLocation } from "react-router-dom";
import "../../assets/styles/index.css";
import found from "../../assets/images/white_plate.jpg";

const Notfound = () => {
  const location = useLocation();

  const pathname = location.pathname;

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <img
        className=" z-9 object-cover xl:h-[600px] lg:h-[600px] md:h-[500px] sm:h-auto "
        src={found}
        alt="the plate image for 404 page"
      />

      <div className="absolute z-10  text-center">
        <div className="relative top-1">
          <p
            id="found"
            className="
        xl:text-9xl lg:text-9xl md:text-9xl sm:text-6xl 
        text-center font-semibold text-black"
          >
            404
          </p>
          <p className="text-[#141414] text-[16px] text-center mt-3">
            Ooops, there is no
            <br />
            page like `{pathname}`
          </p>
          <p className="text-[#141414] text-sm text-center mt-3">
            <Link className=" text-sm inline-block" to="/">
              <u className="text-black text-[16px]">Go back</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
