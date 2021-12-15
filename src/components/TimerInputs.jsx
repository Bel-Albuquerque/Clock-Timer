/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react/cjs/react.development';
// import { useState } from 'react/cjs/react.development';
import MyContext from '../context/MyContext';
// import ClockDisplay from './ClockDisplay';

function InputsTimer() {
  const {
    inputHora,
    setInputHora,
    inputMinuto,
    setInputMinuto,
    inputSegundo,
    setInputSegundo,
  } = useContext(MyContext);

  return (
    <div>
      <input
        min="0"
        max="59"
        name="inputHora"
        type="number"
        value={ inputHora }
        onChange={ ({ target: { value } }) => setInputHora(value) }
        placeholder="0"
      />
      <input
        min="0"
        max="59"
        name="inputMinuto"
        type="number"
        value={ inputMinuto }
        onChange={ ({ target: { value } }) => setInputMinuto(value) }
        placeholder="0"
      />
      <input
        min="0"
        max="59"
        name="inputSegundo"
        type="number"
        value={ inputSegundo }
        onChange={ ({ target: { value } }) => setInputSegundo(value) }
        placeholder="0"
      />
    </div>

  );
}

export default InputsTimer;
