import Button from "../Button";

import { Container } from "./styled";

const Keypad = () => {
  return (
    <Container>
      {[
        { label: "+", id: "plus" },
        { label: "-", id: "minus" },
        { label: "x", id: "multiply" },
        { label: "/", id: "devide" },
      ].map((operation) => (
        <Button
          key={operation.id}
          gridArea={operation.id}
          id={`btn-${operation.id}`}
          // onClick={() => handleClickOperation(operation.label)}
        >
          {operation.label}
        </Button>
      ))}
      {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((num) => (
        <Button
          key={num}
          gridArea={`num-${num}`}
          id={`btn-${num}`}
          // onClick={() => handleClickNum(num)}
        >
          {num}
        </Button>
      ))}
      <Button
        gridArea="point"
        id="btn-point"
        // onClick={() => !num1.includes(".") && handleClickNum(".")}
      >
        .
      </Button>
      <Button
        primary
        gridArea="reset"
        id="btn-reset"
        // onClick={handleClickReset}
      >
        reset
      </Button>
      <Button
        primary
        gridArea="del"
        id="btn-dell"
        // onClick={handleClicDel}
      >
        del
      </Button>
      <Button
        danger
        gridArea="equal"
        id="btn-equal"
        // onClick={handleClickCalculate}
      >
        =
      </Button>
    </Container>
  );
};

export default Keypad;
