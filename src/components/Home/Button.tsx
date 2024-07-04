import React from "react";

interface IBtn {
  style: string;
  text: string;
  href: string;
}

const Button: React.FC<IBtn> = (props) => {
  return (
    <div className="mt-8">
      <a className={props.style} href={props.href}>
        {props.text}
      </a>
    </div>
  );
};

export default Button;
