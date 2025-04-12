import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(n => n + 5);
    setTimeout( () => {
      setNumber(n => n + 1);
      setTimeout(() => {
        setNumber(42);
      }, 500);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Number: {number}</h1>
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Increase the number
      </button>
    </div>
  );
}
