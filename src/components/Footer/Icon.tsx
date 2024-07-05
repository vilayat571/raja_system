import React from "react";

interface IIcon {
  Icon: JSX.Element;
  href:string
}

const Icon: React.FC<IIcon> = ({Icon, href}) => {
  return (
    <a href={href}
    aria-label='the link of Raja Restaurant Social Media Account'
    className="p-3 bg-[#201F1F] rounded-full mr-1" target="blank">
      {Icon}
    </a>
  );
};

export default Icon;
