import React from "react";

const OptionKey = ({ value, onClick }) => {
  return <button className="bg-dark-primary rounded-full text-center" onClick={() => onClick(value)}>{value}</button>;
};

export default OptionKey;