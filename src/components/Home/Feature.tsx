import React from "react";

interface IFeature {
  img: string;
  title: string | undefined;
  text: string | undefined;
}

const Feature: React.FC<IFeature> = ({ img, title, text }) => {
  return (
    <div className="col-span-2 my-12  flex flex-col  items-center">
      <img src={img} className="w-36 h-36 " alt={`the image about ${title}`} />
      <p className="text-black font-semibold text-lg mt-4">{title}</p>
      <p className="text-regular w-3/4 text-black mt-1  text-center">{text}</p>
    </div>
  );
};

export default Feature;
