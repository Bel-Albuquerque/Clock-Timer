import { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import twoDigits from '../functions/twoDigits';

function useToStartTimer() {
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
    setClock,
  } = useContext(MyContext);

  const ONE_SECOND = 1000;
  let localSegundo = inputSegundo;

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
}

export default useToStartTimer;
