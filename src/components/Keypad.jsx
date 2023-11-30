import Key from "./Key";
import { useState } from "react";

function Keypad({ onScreen, setOnScreen }) {
  const [firstDigit, setFirstDigit] = useState(true);
  const [hasDot, setHasDot] = useState(false);
  const [arrayOfDigit, setArrayOfDigit] = useState([]);
  const [previousNumbers, setPreviousNumbers] = useState([]);
  const [clickOperator, setClickOperator] = useState(false);

  const array = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "x",
    "RESET",
    "=",
  ];

  const keys = array.map((item) => (
    <Key
      key={item}
      symbol={item}
      onScreen={onScreen}
      setOnScreen={setOnScreen}
      firstDigit={firstDigit}
      setFirstDigit={setFirstDigit}
      hasDot={hasDot}
      setHasDot={setHasDot}
      arrayOfDigit={arrayOfDigit}
      setArrayOfDigit={setArrayOfDigit}
      previousNumbers={previousNumbers}
      setPreviousNumbers={setPreviousNumbers}
      clickOperator={clickOperator}
      setClickOperator={setClickOperator}
    />
  ));
  return <div className="keypad">{keys}</div>;
}
export default Keypad;
