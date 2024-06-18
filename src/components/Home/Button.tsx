import React from "react";
import { Link } from "react-router-dom";


interface IBtn {
  style: string;
  text: string;
  href: string;
}

const Button: React.FC<IBtn> = (props) => {
  return (
   <div className="mt-8">
     <Link className={props.style} to={props.href}>
      {props.text}
    </Link>
   </div>
  );
};

export default Button;
