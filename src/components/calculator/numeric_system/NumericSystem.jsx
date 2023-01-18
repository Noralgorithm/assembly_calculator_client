import React from "react";
import useNumericSystem from "./useNumericSystem";

const NumericSystem = ({ value, setValue, binary, octal, convertValue }) => {
  return (
    <>
      <div className="text-white text-2xl w-full flex justify-center">
        <input
          type="number"
          value={value}
          placeholder="Enter a value here"
          className="bg-dark-primary rounded-l-3xl p-3 w-2/4 outline-none"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={convertValue}
          className="bg-secondary rounded-r-3xl p-3"
        >
          convert
        </button>
      </div>
      <div className="text-left w-full px-12 h-2/3 flex flex-col mt-6 justify-around">
        <h2 className="text-white text-3xl w-full">
          Binary: 
        </h2>
        <p className="text-white text-2xl text-right bg-dark-primary px-2 rounded-md">{binary}</p>
        <h2 className="text-white text-3xl mt-6 w-full">
          Octal:
        </h2>
        <p className="text-white text-2xl text-right bg-dark-primary px-2 rounded-md">{octal}</p>
      </div>
    </>
  );
};

export default NumericSystem;
