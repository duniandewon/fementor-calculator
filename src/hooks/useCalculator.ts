import { useContext } from "react";

import { ICalculator, CalculatorContext } from "../context/calculatorContext";

export const useCalculator = () => useContext(CalculatorContext) as ICalculator;
