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
        className="w-[240px] rounded-lg h-[300px] object-cover"
        alt={`the image of member of raja team called ${fullName}`}
      />
      <span className="text-xl mt-1 tracking-wider leading-10 text-[#888]">
        {position}
      </span>
      <span className="text-xl mt-1 tracking-wider leading-10 text-black">
        {fullName}
      </span>
    </div>
  );
};

export default Singleteam;
