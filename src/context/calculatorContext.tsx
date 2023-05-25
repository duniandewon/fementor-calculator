import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

export interface ICalculator {
  num1: string;
  num2: number;
  operation: string;
  isCalculating: boolean;
  calculate: () => number;
  setNum1: Dispatch<SetStateAction<string>>;
  setNum2: Dispatch<SetStateAction<number>>;
  setOperation: Dispatch<SetStateAction<string>>;
  setIsCalculating: Dispatch<SetStateAction<boolean>>;
}

export const CalculatorContext = createContext<ICalculator | null>(null);

export const CalculatorContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
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

  const value = useMemo(
    () => ({
      num1,
      num2,
      setNum1,
      setNum2,
      operation,
      setOperation,
      isCalculating,
      setIsCalculating,
      calculate,
    }),
    [
      num1,
      num2,
      setNum1,
      setNum2,
      operation,
      setOperation,
      isCalculating,
      setIsCalculating,
      calculate,
    ]
  );

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};
export const MyContext = createContext("");
