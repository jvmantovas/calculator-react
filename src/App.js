import Input from "./components/Input";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import EqualButton from "./components/EqualButton";
import PlusButton from "./components/PlusButton";
import { Container, Keyboard } from "./styles";
import { useState, useEffect } from "react";

const App = () => {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperations = {
    "÷": (firstValue, secondValue) => firstValue / secondValue,
    "×": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };
  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === "") {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };
  const changeSign = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };
  const clearData = () => {
    setNextValue("0");
    setPrevValue(0);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyPress = (e) => {
    if (e.key > 0 && e.key < 10) {
      handleNum(e.key);
      handleOperation();
    } else {
      handleOperation(e.key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue("");
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === "\xB1") {
      changeSign();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  };

  return (
    <Container>
      <Input value={nextValue} />
      <Keyboard>
        <ClearButton
          keyValue={"c"}
          onClick={handleOperation}
          onKeyPress={(e) => handleKeyPress(e.key)}
        />
        <Button keyValue={"÷"} onClick={handleOperation} />
        <Button keyValue={"×"} onClick={handleOperation} />

        <Button
          keyValue={7}
          onClick={handleOperation}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <Button
          keyValue={8}
          onClick={handleOperation}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <Button
          keyValue={9}
          onClick={handleOperation}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <Button keyValue={"-"} onClick={handleOperation} />

        <Button keyValue={4} onClick={handleOperation} />
        <Button keyValue={5} onClick={handleOperation} />
        <Button keyValue={6} onClick={handleOperation} />
        <PlusButton keyValue={"+"} onClick={handleOperation} />

        <Button keyValue={1} onClick={handleOperation} />
        <Button keyValue={2} onClick={handleOperation} />
        <Button keyValue={3} onClick={handleOperation} />

        <Button keyValue={0} onClick={handleOperation} />
        <Button keyValue={"00"} onClick={handleOperation} />
        <Button keyValue={"."} onClick={handleOperation} />

        <EqualButton keyValue={"="} onClick={handleOperation} />
      </Keyboard>
    </Container>
  );
};

export default App;
