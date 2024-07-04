import React from "react";
import { IGallery } from "../../constants/data";

const SingleGallery: React.FC<IGallery> = ({ img, id }) => {
  return (
    <div
      data-aos="fade-right"
      key={id}
      className="col-span-1 px-0 pb-4  py-0 flex justify-center"
    >
      <img
        src={img}
        className="w-[300px] rounded-lg h-[240px] object-cover"
        alt=""
      />
    </div>
  );
};

export default SingleGallery;
