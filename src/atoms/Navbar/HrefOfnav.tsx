import React from "react";
import { INavData } from "../../constants/Navbar/Hrefs";

const HrefOfnav: React.FC<INavData> = ({ href, text }) => {
  return (
    <a className="px-5" href={href}>
      {text}
    </a>
  );
};

export default HrefOfnav;
