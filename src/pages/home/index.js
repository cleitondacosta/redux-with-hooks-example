import React from 'react';
import './style.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/actions/counter';

export default function HomePage() {
  const counterValue = useSelector(state => state.counter);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment(1));
  }

  function handleDecrement() {
    dispatch(decrement(1));
  }

  return (
    <div className='Page'>
      <h1 className="Title">
        Redux with hooks example
      </h1>

      <div className="CounterContainer">
        <div className="Value">
          { counterValue }
        </div>

        <div className="ButtonsContainer">
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
    </div>
  );
}
