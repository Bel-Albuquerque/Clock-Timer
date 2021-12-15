import { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import twoDigits from '../functions/twoDigits';

function useToControlChronometer() {
  const {
    hora,
    setHora,
    minuto,
    setMinuto,
    segundo,
    setSegundo,
    clock,
    setClock,
  } = useContext(MyContext);

  const ONE_SECOND = 1000;
  let localSegundo = 0;
  let localMinuto = parseInt(minuto, 10);
  let localHora = parseInt(hora, 10);

  const oneHourPass = () => {
    clearInterval(clock);
    setMinuto(twoDigits(0));
    setSegundo(twoDigits(0));
    setHora(twoDigits(localHora += 1));
    setClock(setInterval(() => {
      setSegundo(twoDigits(localSegundo += 1));
    }, ONE_SECOND));
  };

  const oneMinutePass = () => {
    clearInterval(clock);
    setSegundo(twoDigits(0));
    setMinuto(twoDigits(localMinuto += 1));
    setClock(setInterval(() => {
      setSegundo(twoDigits(localSegundo += 1));
    }, ONE_SECOND));
  };

  useEffect(() => {
    const sessenta = 60;
    if (parseInt(segundo, 10) === sessenta && parseInt(minuto, 10) === (sessenta - 1)) {
      oneHourPass();
    }
    if (parseInt(segundo, 10) === sessenta && parseInt(minuto, 10) !== (sessenta - 1)) {
      oneMinutePass();
    }
  });
}

export default useToControlChronometer;
