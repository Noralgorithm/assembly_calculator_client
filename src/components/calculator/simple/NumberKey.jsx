import React from "react";

const NumberKey = ({ value, onClick, className }) => {
  return <button className={className + " bg-light-primary rounded-full text-center"} onClick={() => onClick(value)}>{value}</button>;
};

export default NumberKey;
