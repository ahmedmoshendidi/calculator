function Key({
  symbol,
  onScreen,
  setOnScreen,
  firstDigit,
  setFirstDigit,
  hasDot,
  setHasDot,
  arrayOfDigit,
  setArrayOfDigit,
  previousNumbers,
  setPreviousNumbers,
  clickOperator,
  setClickOperator,
}) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sumAndSub = ["+", "-"];
  const multiplyAndDivide = ["x", "/"];
  let newArr = previousNumbers;
  let num1;
  let operator;
  let num2;
  let calcAll = 0;

  const calc = (num1, operator, num2) => {
    let result = 0;
    switch (operator) {
      case "x":
        result = num1 * num2;
        setPreviousNumbers([...previousNumbers, result, symbol]);
        break;
      case "/":
        if (num2 == 0) {
          return "Error";
        }
        result = num1 / num2;
        setPreviousNumbers([...previousNumbers, result, symbol]);
        break;
      case "+":
        result = num1 + num2;
        setPreviousNumbers([...previousNumbers, result, symbol]);
        break;
      case "-":
        result = num1 - num2;
        setPreviousNumbers([...previousNumbers, result, symbol]);
        break;
    }
    return result;
  };

  let handleClick = () => {
    if (numbers.includes(symbol) && !firstDigit && !hasDot) {
      setOnScreen(onScreen * 10 + symbol);
      setArrayOfDigit([...arrayOfDigit, symbol]);
    } else if (numbers.includes(symbol) && !hasDot) {
      setOnScreen(symbol);
      setFirstDigit(false);
      setArrayOfDigit([...arrayOfDigit, symbol]);
      setClickOperator(false);
    } else if (numbers.includes(symbol) && hasDot) {
      setOnScreen(onScreen + symbol);
      setArrayOfDigit([...arrayOfDigit, symbol]);
    } else if (symbol == "." && !hasDot) {
      if (firstDigit) {
        setOnScreen(0 + ".");
        setFirstDigit(false);
        setClickOperator(false);
      } else {
        setOnScreen(onScreen + symbol);
        setArrayOfDigit([...arrayOfDigit, symbol]);
      }
      setHasDot(true);
    } else if (symbol == "DEL") {
      let newArr = arrayOfDigit;
      if (newArr.splice(newArr.length - 1, 1) == ".") {
        setHasDot(false);
      }
      let num = 0;
      let afterDigit = false;
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] == ".") {
          afterDigit = true;
          num = num + newArr[i];
        } else if (afterDigit) {
          num = num + newArr[i];
        } else {
          num = num * 10 + newArr[i];
        }
      }
      if (newArr.length == 0) {
        setFirstDigit(true);
        setHasDot(false);
        setArrayOfDigit([]);
        setPreviousNumbers([]);
        setClickOperator(false);
      }
      setOnScreen(num);
    } else if (symbol == "RESET") {
      setOnScreen(0);
      setFirstDigit(true);
      setHasDot(false);
      setArrayOfDigit([]);
      setPreviousNumbers([]);
      setClickOperator(false);
    } else if (sumAndSub.includes(symbol)) {
      if (clickOperator) {
        newArr.pop();
        newArr.push(symbol);
        setPreviousNumbers(newArr);
      } else if (previousNumbers.length > 1) {
        for (let i = 0; i < previousNumbers.length; i++) {
          if (i == 0) {
            num2 = Number(onScreen);
          } else {
            num2 = calcAll;
          }
          operator = newArr.pop();
          num1 = newArr.pop();
          if (calc(num1, operator, num2) == "Error") {
            calcAll = "Error";
            break;
          }
          calcAll = calc(num1, operator, num2);
        }
        setOnScreen(calcAll);
      } else {
        setPreviousNumbers([...previousNumbers, Number(onScreen), symbol]);
      }
      setClickOperator(true);
      setFirstDigit(true);
      setHasDot(false);
      setArrayOfDigit([]);
    } else if (multiplyAndDivide.includes(symbol)) {
      if (clickOperator) {
        newArr.pop();
        newArr.push(symbol);
        setPreviousNumbers(newArr);
      } else if (sumAndSub.includes(newArr[newArr.length - 1])) {
        setPreviousNumbers([...previousNumbers, Number(onScreen), symbol]);
      } else if (previousNumbers.length > 1) {
        num2 = Number(onScreen);
        operator = newArr.pop();
        num1 = newArr.pop();
        setOnScreen(calc(num1, operator, num2));
      } else {
        setPreviousNumbers([Number(onScreen), symbol]);
      }
      setClickOperator(true);
      setFirstDigit(true);
      setHasDot(false);
      setArrayOfDigit([]);
    } else if (symbol == "=") {
      for (let i = 0; i < newArr.length; i++) {
        if (i == 0) {
          num2 = Number(onScreen);
        } else {
          num2 = calcAll;
        }
        operator = newArr.pop();
        num1 = newArr.pop();
        if (calc(num1, operator, num2) == "Error") {
          calcAll = "Error";
          break;
        }
        calcAll = calc(num1, operator, num2);
      }
      setOnScreen(calcAll);
      setFirstDigit(true);
      setHasDot(false);
      setArrayOfDigit([]);
      setPreviousNumbers([]);
      setClickOperator(false);
    }
  };

  return (
    <button
      className={`key ${symbol == "RESET" ? "reset" : " "} 
      ${symbol == "DEL" ? "del" : " "} 
      ${symbol == "=" ? "equal" : " "}`}
      onClick={handleClick}
    >
      {symbol}
    </button>
  );
}
export default Key;
