import { useState } from "react";
import { calculate as systemConvertorService } from "../service";

const useNumericSystem = () => {
  const [value, setValue] = useState("");
  const [binary, setBinary] = useState(0);
  const [octal, setOctal] = useState(0);

  const convertValue = async () => {
    try {
      const binaryData = await systemConvertorService(value, "0", "bin");
      const octalData = await systemConvertorService(value, "0", "oct");
      setBinary(binaryData.result);
      setOctal(octalData.result);
      console.log(value, binaryData, octalData)
    } catch (e) {
      console.log(e.message);
    }
  };

  return { value, setValue, binary, octal, convertValue };
};

export default useNumericSystem;
