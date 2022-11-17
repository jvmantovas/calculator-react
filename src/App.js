import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState, useEffect } from "react";

const App = () => {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
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
      <Content>
        <Input value={nextValue} />
        <Row>
          <Button label="C" keyValue={"c"} onClick={handleOperation} />
          <Button label="C" keyValue={"c"} onClick={handleOperation} />
          <Button label="/" keyValue={"/"} onClick={handleOperation} />
          <Button label="X" keyValue={"*"} onClick={handleOperation} />
        </Row>
        <Row>
          <Button label="7" keyValue={7} onClick={handleOperation} />
          <Button label="8" keyValue={8} onClick={handleOperation} />
          <Button label="9" keyValue={9} onClick={handleOperation} />
          <Button label="-" keyValue={"-"} onClick={handleOperation} />
        </Row>
        <Row>
          <Button label="4" keyValue={4} onClick={handleOperation} />
          <Button label="5" keyValue={5} onClick={handleOperation} />
          <Button label="6" keyValue={6} onClick={handleOperation} />
          <Button label="+" keyValue={"+"} onClick={handleOperation} />
        </Row>
        <Row>
          <Button label="1" keyValue={1} onClick={handleOperation} />
          <Button label="2" keyValue={2} onClick={handleOperation} />
          <Button label="3" keyValue={3} onClick={handleOperation} />
          <Button label="+" keyValue={"+"} onClick={handleOperation} />
        </Row>
        <Row>
          <Button label="0" keyValue={0} onClick={handleOperation} />
          <Button label="00" keyValue={"00"} onClick={handleOperation} />
          <Button label="." keyValue={"."} onClick={handleOperation} />
          <Button label="=" keyValue={"="} onClick={handleOperation} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
