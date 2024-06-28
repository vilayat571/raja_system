import React from "react";

interface ISingleFeature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const SingleFeature: React.FC<ISingleFeature> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div
      className="col-span-1 bg-white  rounded-xl px-8 xl:py-12 lg:py-12 md:py-12 sm:py-12 flex justify-center items-center"
    >
      <div className="flex flex-row items-start">
        <div className="p-8 xl:w-32 lg:w-32 md:w-32 sm:w-24 xl:h-32 lg:h-32 md:h-32 sm:h-24  bg-[#EDF2F5] flex justify-center items-center  rounded-full">
          {icon}
        </div>

        <div className="flex flex-col text-black tracking-wider ml-3">
          <p>
            <span className="xl:text-7xl lg:text-7xl md:text-7xl sm:text-5xl text-black">{title}</span>
            <sub className="text-black xl:text-7xl lg:text-7xl md:text-7xl sm:text-5xl">+</sub>
          </p>

          <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-[16px] text-[#454454] py-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
