import { useCallback, useState } from "react";

function useCalculator() {
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);

  const calculate = useCallback(() => {
    switch (operation) {
      case "+":
        return num2 + Number(num1);

      case "-":
        return num2 - Number(num1);

      case "x":
        return num2 * Number(num1);

      case "/":
        return num2 / Number(num1);

      default:
        return 0;
    }
  }, [num1, num2, operation]);

  const handleClickNum = (num: string) => {
    if (num2 && isCalculating) {
      setNum1("");
      setIsCalculating(false);
    }

    if (num1 === "0" && num !== ".") return setNum1(num);
    return setNum1((prev) => (prev += num));
  };

  const handleClickCalculate = () => {
    setNum2(0);
    setOperation("");
    setIsCalculating(false);
    setNum1(calculate().toString());
  };

  const handleClickOperation = (op: string) => {
    if (!isCalculating && num2) {
      const res = calculate();
      setNum1(res.toString());
      setNum2(res);
    } else {
      setNum2(Number(num1));
    }

    setOperation(op);
    setIsCalculating(true);
  };

  const handleClicDel = () => {
    if (num1.length === 1) return setNum1("0");
    return setNum1((prev) => prev.slice(0, -1));
  };

  const handleClickReset = () => {
    setNum1("0");
    setNum2(0);
    setIsCalculating(false);
    setOperation("");
  };

  return {
    num1,
    handleClickReset,
    handleClicDel,
    handleClickOperation,
    handleClickCalculate,
    handleClickNum,
  };
}

export default useCalculator;
