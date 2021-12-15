/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */
/* eslint-disable radix */
import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import ClockDisplay from '../components/ClockDisplay';
import InputsTimer from '../components/TimerInputs';
import InputButtonsTimer from '../components/InputButtonsTimer';

function Timer() {
  const {
    hora,
    setHora,
    minuto,
    setMinuto,
    segundo,
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

  const [startClock, setStartClock] = useState();

  const ZERO = 0;
  const ONE_SECOND = 1000;
  let localSegundo = inputSegundo;
  let cinquentaEnove = 59;

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
      setInputHora(0);
      setInputMinuto(0);
      setInputSegundo(0);
      console.log(parseInt(minuto));
      setStartClock(setInterval(() => {
        setSegundo(twoDigits(localSegundo -= 1));
        setBool(true);
      }, ONE_SECOND));
      setStartTimer(false);
    }
  }, [startTimer]);

  const endTimer = () => {
    console.log('encerra timer');
    setHora(twoDigits(0));
    setMinuto(twoDigits(0));
    setSegundo(twoDigits(0));

    clearInterval(startClock);
  };

  const secondAndMinuteIsZero = () => {
    clearInterval(startClock);
    setSegundo(59);
    setMinuto(59);
    setHora(twoDigits(hora - 1));

    setStartClock(setInterval(() => {
      setSegundo(twoDigits(cinquentaEnove -= 1));
    }, ONE_SECOND));
  };

  const secondIsZero = () => {
    clearInterval(startClock);
    setSegundo(twoDigits(59));
    setMinuto(twoDigits(minuto - 1));

    setStartClock(setInterval(() => {
      setSegundo(twoDigits(cinquentaEnove -= 1));
    }, ONE_SECOND));
  };

  useEffect(() => {
    if (parseInt(segundo) === (ZERO - 1) && !startTimer) {
      if (parseInt(minuto) === ZERO && parseInt(hora) === ZERO) {
        return endTimer();
      }
      if (parseInt(minuto) === ZERO) {
        return secondAndMinuteIsZero();
      }
      return secondIsZero();
    }
  });

  return (
    <>
      <ClockDisplay />
      <InputsTimer />
      <InputButtonsTimer />
    </>
  );
}

export default Timer;
