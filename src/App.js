import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      You have clicked this button {count} times
    </button>
  );
}
