import React from 'react';
import ClockDisplay from '../components/ClockDisplay';
import InputsTimer from '../components/TimerInputs';
import InputButtonsTimer from '../components/InputButtonsTimer';
import useToStartPage from '../hocks/useToStartPage';
import useToControlTimer from '../hocks/useToControlTimer';
import useToStartTimer from '../hocks/useToStartTimer';

function Timer() {
  useToStartPage();

  useToStartTimer();

  useToControlTimer();

  return (
    <>
      <ClockDisplay />
      <InputsTimer />
      <InputButtonsTimer />
    </>
  );
}

export default Timer;
