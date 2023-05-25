import { useCalculator } from "../../hooks/useCalculator";
import { useTheme } from "../../hooks/useTheme";

import Button from "../Button";

import { Container } from "./styled";

const Keypad = () => {
  const { theme } = useTheme();

  const {
    setOperation,
    isCalculating,
    num2,
    calculate,
    num1,
    setIsCalculating,
    setNum1,
    setNum2,
  } = useCalculator();


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

  const handleClickNum = (num: string) => {
    if (num2 && isCalculating) {
      setNum1("");
      setIsCalculating(false);
    }

    if (num1 === "0" && num !== ".")
      return setNum1(num);
    return setNum1((prev) => (prev += num));
  };

  const handleClickReset = () => {
    setNum1("0");
    setNum2(0);
    setIsCalculating(false);
    setOperation("");
  };

  const handleClicDel = () => {
    if (num1.length === 1) return setNum1("0");
    return setNum1((prev) => prev.slice(0, -1));
  };

  const handleClickCalculate = () => {
    setNum2(0);
    setOperation("");
    setIsCalculating(false);
    setNum1(calculate().toString());
  };

  return (
    <Container currenttheme={theme}>
      {[
        { label: "+", id: "plus" },
        { label: "-", id: "minus" },
        { label: "x", id: "multiply" },
        { label: "/", id: "devide" },
      ].map((operation) => (
        <Button
          key={operation.id}
          currenttheme={theme}
          gridarea={operation.id}
          id={`btn-${operation.id}`}
          onClick={() => handleClickOperation(operation.label)}
        >
          {operation.label}
        </Button>
      ))}
      {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((num) => (
        <Button
          key={num}
          currenttheme={theme}
          gridarea={`num-${num}`}
          id={`btn-${num}`}
          onClick={() => handleClickNum(num)}
        >
          {num}
        </Button>
      ))}
      <Button
        currenttheme={theme}
        gridarea="point"
        id="btn-point"
        onClick={() => !num1.includes(".") && handleClickNum(".")}
      >
        .
      </Button>
      <Button
        $primary
        currenttheme={theme}
        gridarea="reset"
        id="btn-reset"
        onClick={handleClickReset}
      >
        reset
      </Button>
      <Button
        $primary
        currenttheme={theme}
        gridarea="del"
        id="btn-dell"
        onClick={handleClicDel}
      >
        del
      </Button>
      <Button
        $danger
        currenttheme={theme}
        gridarea="equal"
        id="btn-equal"
        onClick={handleClickCalculate}
      >
        =
      </Button>
    </Container>
  );
};

export default Keypad;
