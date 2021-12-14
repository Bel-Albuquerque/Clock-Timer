/* eslint-disable radix */
import React, { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import MyContext from '../context/MyContext';
import ClockDisplay from '../components/ClockDisplay';

function Chronometer() {
  const {
    hora,
    setHora,
    minuto,
    setMinuto,
    segundo,
    setSegundo,
  } = useContext(MyContext);

  const [startClock, setStartClock] = useState();

  const ONE_SECOND = 1000;
  let localSegundo = 0;
  let localMinuto = parseInt(minuto, 10);
  let localHora = parseInt(hora, 10);

  const twoDigits = (param) => {
    const time = param.toString();
    return time.length === 1 ? `0${time}` : time;
  };

  useEffect(() => {
    setHora(twoDigits(0));
    setMinuto(twoDigits(0));
    setSegundo(twoDigits(0));
    setStartClock(setInterval(() => {
      setSegundo(twoDigits(localSegundo += 1));
    }, ONE_SECOND));
  }, []);

  const oneHourPass = () => {
    clearInterval(startClock);
    setMinuto(twoDigits(0));
    setSegundo(twoDigits(0));
    setHora(twoDigits(localHora += 1));
    setStartClock(setInterval(() => {
      setSegundo(twoDigits(localSegundo += 1));
    }, ONE_SECOND));
  };

  const oneMinutePass = () => {
    clearInterval(startClock);
    setSegundo(twoDigits(0));
    setMinuto(twoDigits(localMinuto += 1));
    setStartClock(setInterval(() => {
      setSegundo(twoDigits(localSegundo += 1));
    }, ONE_SECOND));
  };

  const changeTime = () => {
    const sessenta = 60;
    if (parseInt(segundo) === sessenta && parseInt(minuto) === (sessenta - 1)) {
      oneHourPass();
    }
    if (parseInt(segundo) === sessenta && parseInt(minuto) !== (sessenta - 1)) {
      oneMinutePass();
    }
  };

  useEffect(() => {
    changeTime();
  });

  const handleStop = () => {
    clearInterval(startClock);
  };
  return (
    <>
      <ClockDisplay />
      <button
        type="button"
        onClick={ handleStop }
      >
        stop
      </button>
    </>
  );
}

export default Chronometer;
