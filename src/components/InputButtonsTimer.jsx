/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react/cjs/react.development';
// import { useState } from 'react/cjs/react.development';
import MyContext from '../context/MyContext';
// import ClockDisplay from './ClockDisplay';

function InputButtons() {
  const {
    setStartTimer,
  } = useContext(MyContext);

  const handleStart = () => {
    setStartTimer(true);
  };

  return (
    <nav>
      <button
        type="button"
        onClick={ handleStart }
      >
        start
      </button>
      <button
        type="button"
      >
        stop
      </button>
      <button
        type="button"
      >
        pause
      </button>
    </nav>

  );
}

export default InputButtons;
