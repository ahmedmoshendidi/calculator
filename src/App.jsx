import "./index.css";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Keypad from "./components/Keypad";

import { useState } from "react";

function App() {
  const [onScreen, setOnScreen] = useState(0);

  return (
    <div className="container">
      <Header />
      <Screen onScreen={onScreen} />
      <Keypad setOnScreen={setOnScreen} onScreen={onScreen} />
    </div>
  );
}
export default App;
