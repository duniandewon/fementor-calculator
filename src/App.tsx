// import { useCallback, useState } from "react";
import "./App.css";
import ThemeSwitcher from "./ThemeSwitcher";
import useCalculator from "./hooks/useCalculator";

function App() {
  const {
    num1,
    handleClicDel,
    handleClickCalculate,
    handleClickNum,
    handleClickOperation,
    handleClickReset,
  } = useCalculator();

  return (
    <div className="calculator">
      <header className="calculator__header">
        <p className="calculator__logo">calc</p>
        <ThemeSwitcher />
      </header>
      <aside className="calculator__display">{num1}</aside>
      <main className="calculator__btns">
        {[
          { label: "+", id: "plus" },
          { label: "-", id: "minus" },
          { label: "x", id: "multiply" },
          { label: "/", id: "devide" },
        ].map((operation) => (
          <button
            className="btn"
            id={`btn-${operation.id}`}
            key={operation.id}
            onClick={() => handleClickOperation(operation.label)}
          >
            {operation.label}
          </button>
        ))}
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((num) => (
          <button
            key={num}
            id={`btn-${num}`}
            className="btn"
            onClick={() => handleClickNum(num)}
          >
            {num}
          </button>
        ))}
        <button
          className="btn"
          id="btn-point"
          onClick={() => !num1.includes(".") && handleClickNum(".")}
        >
          .
        </button>
        <button
          className="btn primary"
          id="btn-reset"
          onClick={handleClickReset}
        >
          reset
        </button>
        <button className="btn primary" id="btn-dell" onClick={handleClicDel}>
          del
        </button>
        <button
          className="btn danger"
          id="btn-equal"
          onClick={handleClickCalculate}
        >
          =
        </button>
      </main>
    </div>
  );
}

export default App;
