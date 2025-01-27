import React from "react";

interface Props {
  text: string;
  onClick?: Function;
  className? : string
}

const Button: React.FC<Props> = ({ text, onClick, className }) => {
  return (
    <button
      className={"mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded " + className}
      onClick={() => onClick ? onClick() : null}
    >
      {text}
    </button>
  );
};

export default Button