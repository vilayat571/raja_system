import React from "react";
import { IMenu } from "../../constants/data";

const SingleMenu: React.FC<IMenu> = ({ img, price, title }) => {
  return (
    <div
      key={Math.random()}
      className="col-span-1 px-0 pb-4 rounded-lxl py-0 flex justify-center"
    >
      <div className="flex flex-col items-center">
        <img
          src={img}
          className="w-[360px] rounded-lg h-[445px] object-cover mb-4"
          alt=""
        />
        <div
          className=" w-11/12  relative flex tracking-wider
    justify-start items-center text-left px-8 py-6 -right-4 bottom-20 rounded-lg bg-[#F7F9F8]"
        >
          <div className="flex flex-col ">
            <span className="text-[#333] text">{price}$</span>
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
