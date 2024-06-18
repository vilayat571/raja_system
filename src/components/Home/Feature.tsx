import React from "react";


interface IFeature {
  img: string;
  title: string;
  text: string;
}

const Feature: React.FC<IFeature> = (props) => {
  return (
    <div className="xl:flex-col lg:flex-col md:flex-col sm:flex-row my-12 justify-start">
      <img src={props.img } className="w-36 h-36 " alt="" />
      <p className="text-black font-semibold text-lg mt-4">{props.title}</p>
      <p className="text-regular w-3/4 text-black mt-1">{props.text}</p>
    </div>
  );
};

export default Feature;
