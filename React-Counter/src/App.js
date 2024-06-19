import "./App.css";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = (value, operation) => {
    if (operation === "add") setCount(count + value);
    else setCount(count - value);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{count}</p>
      {/* increase button */}
      <div className="container">
        <div>
          <button onClick={() => handleClick(5, "add")}>+5</button>
          <button onClick={() => handleClick(20, "add")}>+20 </button>
          <button onClick={() => handleClick(30, "add")}>+30</button>
          <button onClick={() => handleClick(40, "add")}>+40</button>
          <button onClick={() => handleClick(50, "add")}>+50</button>
        </div>
        {/* decrease button */}
        <div>
          <button onClick={() => handleClick(5)}>-5</button>
          <button onClick={() => handleClick(20)}>-20 </button>
          <button onClick={() => handleClick(30)}>-30</button>
          <button onClick={() => handleClick(40)}>-40</button>
          <button onClick={() => handleClick(50)}>-50</button>
        </div>
      </div>
    </div>
  );
}
