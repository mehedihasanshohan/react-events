import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      className="relative w-full h-screen bg-gray-100"  // Tailwind styles for container
    >
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        className="absolute bg-red-500 rounded-full w-5 h-5 -left-2.5 -top-2.5" // Tailwind for the dot
      />
    </div>
  );
}
