import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Initial');

  const handleClick = () => {
    setCount(count + 1);
    setText('Updated');
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <p className="text-2xl font-semibold text-gray-800">Count: {count}</p>
      <p className="text-xl text-gray-600 mt-2">Text: {text}</p>
      <button
        onClick={handleClick}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Update
      </button>
    </div>
  );
}

export default Counter;
