import React from "react";
import { ITeam } from "../../constants/Team/data";

const Singleteam: React.FC<ITeam> = ({ img, id, fullName, position }) => {
  return (
    <div
      data-aos="fade-left"
      key={id}
      className="col-span-1 px-0 pb-4  py-0 flex flex-col items-center "
    >
      <img
        src={img}
        className="w-[350px] rounded-lg h-[330px] object-cover"
        alt={`the image of member of raja team called ${fullName}`}
      />
    <p className="flex flex-col items-center mt-3">
    <span className="tracking-wider text-[17px]  text-[#000]">
        {position}
      </span>
      <span className="text-xl relative bottom-1 tracking-wider leading-10 text-black">
        {fullName}
      </span>
    </p>
    </div>
  );
};

export default Singleteam;
