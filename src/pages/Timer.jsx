/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */
/* eslint-disable radix */
import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import ClockDisplay from '../components/ClockDisplay';
import InputsTimer from '../components/TimerInputs';
import InputButtonsTimer from '../components/InputButtonsTimer';
import useToStartPage from '../hocks/useToStartPage';

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

  const [clock, setClock] = useState();

  const ZERO = 0;
  const ONE_SECOND = 1000;
  let localSegundo = inputSegundo;
  let cinquentaEnove = 59;

  const twoDigits = (param) => {
    const time = param.toString();
    return time.length === 1 ? `0${time}` : time;
  };

  useToStartPage();

  useEffect(() => {
    if (startTimer) {
      setHora(twoDigits(inputHora));
      setMinuto(twoDigits(inputMinuto));
      setSegundo(twoDigits(inputSegundo));
      setInputHora(0);
      setInputMinuto(0);
      setInputSegundo(0);
      setClock(setInterval(() => {
        setSegundo(twoDigits(localSegundo -= 1));
      }, ONE_SECOND));
      setStartTimer(false);
    }
  }, [startTimer]);

  const endTimer = () => {
    setHora(twoDigits(0));
    setMinuto(twoDigits(0));
    setSegundo(twoDigits(0));

    clearInterval(clock);
  };

  const secondAndMinuteIsZero = () => {
    clearInterval(clock);
    setSegundo(59);
    setMinuto(59);
    setHora(twoDigits(hora - 1));

    setClock(setInterval(() => {
      setSegundo(twoDigits(cinquentaEnove -= 1));
    }, ONE_SECOND));
  };

  const secondIsZero = () => {
    clearInterval(clock);
    setSegundo(twoDigits(59));
    setMinuto(twoDigits(minuto - 1));

    setClock(setInterval(() => {
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
