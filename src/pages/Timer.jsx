import React from 'react';
import ClockDisplay from '../components/ClockDisplay';
import InputsTimer from '../components/TimerInputs';
import InputButtonsTimer from '../components/InputButtonsTimer';
import useToStartPage from '../hocks/useToStartPage';
import useToControlTimer from '../hocks/useToControlTimer';
import useToStartTimer from '../hocks/useToStartTimer';
import useReStartTimer from '../hocks/useSetTimer';

function Timer() {
  useToStartPage();

  useToStartTimer();

  useReStartTimer();

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
