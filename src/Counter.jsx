import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Initial');

  const handleClick = () => {
    setCount(count + 1);
    setText('Updated');
    // React will batch these and re-render only once
  };

  return (
    <div>
      <p>{count}</p>
      <p>{text}</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
