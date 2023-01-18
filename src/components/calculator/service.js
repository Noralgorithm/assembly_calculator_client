import axios from "axios";

const URL = "http://localhost:3000/calculator";

const operations = {
  "+": "add",
  "-": "sub",
  "*": "mul",
  "/": "div",
  exp: "pow",
  oct: "oct",
  bin: "bin"
};

export const calculate = async (numA = 0, numB = 0, operation = '') => {
  try {
    operation = operations[operation];
    const { data } = await axios.get(URL, {
      params: {
        numA,
        numB,
        operation,
      },
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
