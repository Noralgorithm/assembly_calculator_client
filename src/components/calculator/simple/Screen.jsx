import React from "react";

const Screen = ({
  firstInput,
  secondInput,
  operationInput,
  result,
  className,
}) => {
  return (
    <div>
      <div className={className + " flex justify-center items-center"}>
        {result ? (
          <span>{result}</span>
        ) : (
          <span>
            {firstInput}
            {operationInput}
            {secondInput}
          </span>
        )}
      </div>
    </div>
  );
};

export default Screen;
