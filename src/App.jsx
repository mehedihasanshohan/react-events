import { useState } from 'react';
import { sculptureList } from './data.js';
import Form from './Form.jsx';
import Counter from './Counter.jsx';
import Batching from './Batching.jsx';
import MovingDot from './MovingDot.jsx';
import MultipleObjectsState from './assets/multipleObjectsState.jsx';
export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <div className='pl-8 pt-4'>
      <button className='p-2 bg-blue-400 border-2 rounded-xl text-white' onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
      <Form></Form>
      <Counter></Counter>
      <Batching></Batching>
      <MovingDot></MovingDot>
      <MultipleObjectsState></MultipleObjectsState>
    </div>
  );
}
