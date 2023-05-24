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
          gridarea={`num-${num}`}
          id={`btn-${num}`}
          // onClick={() => handleClickNum(num)}
        >
          {num}
        </Button>
      ))}
      <Button
        gridarea="point"
        id="btn-point"
        // onClick={() => !num1.includes(".") && handleClickNum(".")}
      >
        .
      </Button>
      <Button
        $primary
        gridarea="reset"
        id="btn-reset"
        // onClick={handleClickReset}
      >
        reset
      </Button>
      <Button
        $primary
        gridarea="del"
        id="btn-dell"
        // onClick={handleClicDel}
      >
        del
      </Button>
      <Button
        $danger
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
