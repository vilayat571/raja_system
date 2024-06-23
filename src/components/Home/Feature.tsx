import React from "react";

interface IFeature {
  img: string;
  title: string;
  text: string;
}

const Feature: React.FC<IFeature> = (props) => {
  return (
    <div className="col-span-2 my-12  flex flex-col  items-center">
      <img src={props.img} className="w-36 h-36 " alt="" />
      <p className="text-black font-semibold text-lg mt-4">{props.title}</p>
      <p className="text-regular w-3/4 text-black mt-1  text-center">
        {props.text}
      </p>
    </div>
  );
};

export default Feature;
