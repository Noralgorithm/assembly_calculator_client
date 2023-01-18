import React, { useMemo, useState } from "react";
import Calculator from "./simple/Calculator";
import NumericSystem from "./numeric_system/NumericSystem";
import useCalculator from "./simple/useCalculator";
import useNumericSystem from "./numeric_system/useNumericSystem";

const index = () => {
  const [isInNumericSystem, setIsInNumericSystem] = useState(false);
  const calcButtonColor = useMemo(() => {
    return isInNumericSystem ? "text-slate-400" : "text-white";
  });
  const numericSystemButtonColor = useMemo(() => {
    return isInNumericSystem ? "text-white" : "text-slate-400";
  });

  const {
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
  } = useCalculator();

  const { value, setValue, binary, octal, convertValue } = useNumericSystem();

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <header className="flex justify-evenly text-white w-11/12 sm:w-2/5 lg:w-1/4">
          <button
            onClick={() => setIsInNumericSystem(false)}
            className={calcButtonColor}
          >
            Calculator
          </button>
          <button
            onClick={() => setIsInNumericSystem(true)}
            className={numericSystemButtonColor}
          >
            Numeric System
          </button>
        </header>
        {isInNumericSystem ? (
          <div className="flex flex-col justify-start py-12 items-center bg-primary h-4/5 rounded-3xl w-11/12 sm:w-2/5 lg:w-1/3">
            <NumericSystem
              value={value}
              setValue={setValue}
              binary={binary}
              octal={octal}
              convertValue={convertValue}
            />
          </div>
        ) : (
          <div className="flex flex-col justify-end bg-primary h-4/5 rounded-3xl w-11/12 sm:w-2/5 lg:w-1/3">
            <Calculator
              firstInput={firstInput}
              secondInput={secondInput}
              operationInput={operationInput}
              result={result}
              readInput={readInput}
              deleteInput={deleteInput}
              resetInput={resetInput}
              calculate={calculate}
              readOperationInput={readOperationInput}
              switchSign={switchSign}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default index;
