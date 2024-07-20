import React from "react";
import { IMenu } from "../../constants/Menu/data";


const SingleMenu: React.FC<IMenu> = ({ img, price, title, id }) => {
  return (
    <div
    data-aos='fade-right'
      key={Math.random()}
      className={`col-span-1 px-0 pb-4 h-auto py-0 flex justify-center ${id!=null && id>3 && 'relative bottom-20'}`}
    >
      <div className="flex flex-col items-center">
        <img
          src={img}
          className=" rounded-lg
           xl:w-[360] lg:w-[360] md:w-[360] sm:w-[340px]
          xl:h-[480px] lg:h-[480px] md:h-[480px] sm:h-[400px] 
          object-cover mb-4"
          alt={`the image of ${title}`}
        />
        <div
          className=" xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-10/12  relative flex tracking-wider
    justify-start items-center text-left px-8 xl:py-8 lg:py-8 md:py-8 sm:py-6 -right-4 bottom-20 rounded-lg bg-[#F7F9F8]"
        >
          <div className="flex flex-col ">
            <span className="text-[#333] text">{price}₼</span>
            <span className="text-[#1f1f1f] mt-2 font-black text-xl">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMenu;
