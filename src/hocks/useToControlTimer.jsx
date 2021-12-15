import { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import twoDigits from '../functions/twoDigits';

function useToControlTimer() {
  const {
    hora,
    setHora,
    minuto,
    setMinuto,
    segundo,
    setSegundo,
    clock,
    setClock,
    startTimer,

  } = useContext(MyContext);

  const ZERO = 0;
  const ONE_SECOND = 1000;
  // eslint-disable-next-line no-magic-numbers
  let CINQUENTAeNOVE = 59;

  const endTimer = () => {
    setHora(twoDigits(0));
    setMinuto(twoDigits(0));
    setSegundo(twoDigits(0));

    clearInterval(clock);
  };

  const secondAndMinuteIsZero = () => {
    clearInterval(clock);
    setSegundo(CINQUENTAeNOVE);
    setMinuto(CINQUENTAeNOVE);
    setHora(twoDigits(hora - 1));

    setClock(setInterval(() => {
      setSegundo(twoDigits(CINQUENTAeNOVE -= 1));
    }, ONE_SECOND));
  };

  const secondIsZero = () => {
    clearInterval(clock);
    setSegundo(twoDigits(CINQUENTAeNOVE));
    setMinuto(twoDigits(minuto - 1));

    setClock(setInterval(() => {
      setSegundo(twoDigits(CINQUENTAeNOVE -= 1));
    }, ONE_SECOND));
  };

  useEffect(() => {
    if (parseInt(segundo, 10) === (ZERO - 1) && !startTimer) {
      if (parseInt(minuto, 10) === ZERO && parseInt(hora, 10) === ZERO) {
        return endTimer();
      }
      if (parseInt(minuto, 10) === ZERO) {
        return secondAndMinuteIsZero();
      }
      return secondIsZero();
    }
  });
}

export default useToControlTimer;
