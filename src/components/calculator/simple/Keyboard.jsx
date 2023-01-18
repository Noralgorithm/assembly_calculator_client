import React from "react";
import NumberKey from "./NumberKey";
import DeleteKey from "./DeleteKey";
import OptionKey from "./OptionKey";

const Keyboard = ({ className, readInput, deleteInput, resetInput, calculate, readOperationInput, switchSign }) => {
  return (
    <div className={className + ' p-2'}>
      <OptionKey value='exp' onClick={readOperationInput} />
      <OptionKey value='c' onClick={resetInput} />
      <DeleteKey onClick={deleteInput} />
      <NumberKey value='1' onClick={readInput} />
      <NumberKey value='2' onClick={readInput} />
      <NumberKey value='3' onClick={readInput} />
      <OptionKey value='*' onClick={readOperationInput} />
      <NumberKey value='4' onClick={readInput} />
      <NumberKey value='5' onClick={readInput} />
      <NumberKey value='6' onClick={readInput} />
      <OptionKey value='+' onClick={readOperationInput} />
      <NumberKey value='7' onClick={readInput} />
      <NumberKey value='8' onClick={readInput} />
      <NumberKey value='9' onClick={readInput} />
      <OptionKey value='-' onClick={readOperationInput} />
      <OptionKey value='+/-' onClick={switchSign} />
      <NumberKey value='0' onClick={readInput} />
      <OptionKey value='/' onClick={readOperationInput} />
      <OptionKey value='=' onClick={calculate} />
    </div>
  );
};

export default Keyboard;
