import { useTheme } from "../../hooks/useTheme";
import Button from "../Button";

import { Container } from "./styled";

const Keypad = () => {
  const { theme } = useTheme();

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
          // onClick={() => handleClickOperation(operation.label)}
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
          // onClick={() => handleClickNum(num)}
        >
          {num}
        </Button>
      ))}
      <Button
        currenttheme={theme}
        gridarea="point"
        id="btn-point"
        // onClick={() => !num1.includes(".") && handleClickNum(".")}
      >
        .
      </Button>
      <Button
        $primary
        currenttheme={theme}
        gridarea="reset"
        id="btn-reset"
        // onClick={handleClickReset}
      >
        reset
      </Button>
      <Button
        $primary
        currenttheme={theme}
        gridarea="del"
        id="btn-dell"
        // onClick={handleClicDel}
      >
        del
      </Button>
      <Button
        $danger
        currenttheme={theme}
        gridarea="equal"
        id="btn-equal"
        // onClick={handleClickCalculate}
      >
        =
      </Button>
    </Container>
  );
};

export default Keypad;
