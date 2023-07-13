import React from "react";

const Button = ({ title }) => {
  return (
    <button className=" rounded   text-lg text-white bg-pink-600 px-3 py-1 ">
      {title}
    </button>
  );
};

export default Button;
