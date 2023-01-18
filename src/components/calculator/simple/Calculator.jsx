import React from "react";
import Keyboard from "./Keyboard";;
import Screen from "./Screen";

const Calculator = ({
  firstInput,
  secondInput,
  operationInput,
  result,
  readInput,
  deleteInput,
  resetInput,
  calculate,
  readOperationInput,
  switchSign,
}) => {
  return (
    <>
      <Screen
        firstInput={firstInput}
        secondInput={secondInput}
        operationInput={operationInput}
        result={result}
        className="text-white text-4xl text-right h-1/5"
      />
      <hr className="mx-11" />
      <Keyboard
        readInput={readInput}
        deleteInput={deleteInput}
        resetInput={resetInput}
        calculate={calculate}
        readOperationInput={readOperationInput}
        switchSign={switchSign}
        className="text-white text-2xl h-4/5 grid grid-cols-4 gap-1 py-5"
      />
    </>
  );
};

export default Calculator;
