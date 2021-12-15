import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import ClockDisplay from '../components/ClockDisplay';
import twoDigits from '../functions/twoDigits';

function Clock() {
  const {
    setHora,
    setMinuto,
    setSegundo,
  } = useContext(MyContext);

  useEffect(() => {
    const ONE_SECOND = 1000;
    setInterval(() => {
      setHora(twoDigits(new Date().getHours()));
      setMinuto(twoDigits(new Date().getMinutes()));
      setSegundo(twoDigits(new Date().getSeconds()));
    }, ONE_SECOND);
  }, []);

  return (
    <ClockDisplay />
  );
}

export default Clock;
