/* eslint-disable radix */
import React, { useContext, useEffect } from 'react';
// import { useState } from 'react/cjs/react.development';
import MyContext from '../context/MyContext';
import ClockDisplay from '../components/ClockDisplay';
import InputsTimer from '../components/TimerInputs';
import InputButtonsTimer from '../components/InputButtonsTimer';

function Timer() {
  const {
    setHora,
    setMinuto,
    setSegundo,
    startTimer,
    setStartTimer,
    inputHora,
    setInputHora,
    inputMinuto,
    setInputMinuto,
    inputSegundo,
    setInputSegundo,
  } = useContext(MyContext);

  const twoDigits = (param) => {
    const time = param.toString();
    return time.length === 1 ? `0${time}` : time;
  };

  useEffect(() => {
    setHora(twoDigits(0));
    setMinuto(twoDigits(0));
    setSegundo(twoDigits(0));
  }, []);

  useEffect(() => {
    if (startTimer) {
      setHora(twoDigits(inputHora));
      setMinuto(twoDigits(inputMinuto));
      setSegundo(twoDigits(inputSegundo));
      setStartTimer(false);
      setInputHora(0);
      setInputMinuto(0);
      setInputSegundo(0);
    }
  }, [startTimer]);

  return (
    <>
      <ClockDisplay />
      <InputsTimer />
      <InputButtonsTimer />
    </>
  );
}

export default Timer;
