import { useState } from "react";
import { calculate as calculateService } from "../service";

const useCalculator = () => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [operationInput, setOperationInput] = useState(null);
  const [result, setResult] = useState(null);

  const readInput = (input) => {
    if (result) setResult("");
    if (operationInput) setSecondInput(secondInput + input);
    else setFirstInput(firstInput + input);
  };

  const readOperationInput = (input) => {
    if (result) {
      setFirstInput(String(result));
      setResult(null);
    }
    setOperationInput(input);
  };

  const signSwitcher = (input) => {
    if (input[0] === "-") return input.slice(1, input.length);
    else return "-" + input;
  };

  const switchSign = () => {
    if (result) {
      setFirstInput(signSwitcher(String(result)));
      setResult(null);
      return;
    }
    if (operationInput) setSecondInput(signSwitcher(secondInput));
    else setFirstInput(signSwitcher(firstInput));
  };

  const deleteInput = () => {
    if (result) {
      setFirstInput(String(result).slice(0, firstInput.length - 1));
      setResult(null);
      return;
    }
    if (secondInput.length > 1)
      setSecondInput(secondInput.slice(0, secondInput.length - 1));
    else if (operationInput) setOperationInput(null);
    else setFirstInput(firstInput.slice(0, firstInput.length - 1));
  };

  const resetInput = () => {
    setFirstInput("");
    setOperationInput(null);
    setResult(null);
    setSecondInput("");
  };

  const calculate = async () => {
    const data = await calculateService(
      firstInput,
      secondInput,
      operationInput
    );
    setResult(data.result);
    setFirstInput("");
    setOperationInput(null);
    setSecondInput("");
  };

  return {
    firstInput,
    secondInput,
    operationInput,
    result,
    readInput,
    deleteInput,
    resetInput,
    calculate,
    readOperationInput,
    switchSign
  };
};

export default useCalculator;
