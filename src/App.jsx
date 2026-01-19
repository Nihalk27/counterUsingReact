import "./App.css";
import { useState } from "react";

export default function App(){
  const [count, setCount] = useState(0);
  return (

    <>
    <h1>Counter is {count} </h1>
    <div>
      <button onClick={() => setCount(count + 1)} style={{margin:" 0 5px" }}>Increase</button>
      <button onClick={() => setCount((count) => Math.max(count - 1, 0))} style={{margin:" 0 5px" }}>Decrease</button>
      <button onClick={() => setCount((count) => 0)} style={{margin:" 0 5px" }}>Reset</button>
    </div>
    </>
  )
}