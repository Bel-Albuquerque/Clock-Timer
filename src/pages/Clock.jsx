import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import ClockDisplay from '../components/ClockDisplay';

function Clock() {
  const {
    setHora,
    setMinuto,
    setSegundo,
  } = useContext(MyContext);

  const twoDigits = (param) => {
    const time = param.toString();
    return (time.length === 1 ? `0${time}` : time);
  };

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
