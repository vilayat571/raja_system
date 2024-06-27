import React from "react";
import { IMenu } from "../../constants/data";
import { Link } from "react-router-dom";

const SingleMenu: React.FC<IMenu> = ({ img, price, text, title }) => {
  return (
    <div className="col-span-1 flex justify-center">
      <div>
        <img
          src={img}
          className="w-[350px] rounded-xl h-[300px] object-cover mb-4"
          alt=""
        />

        <p className="flex  items-center mt-3 px-2">
          <span className="text-black text-xl font-semibold">{title}</span>
          <span className="text-black font-semibold mx-4"> {price} $</span>
        </p>

        <p className="text-black text-left mt-2 px-2">{text}</p>

        <p className="flex justify-start px-2 mt-5 ">
          <Link to="" className="px-4 py-2 text-sm border-[#888] border-[1px] text-black rounded">
            Read more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SingleMenu;
