import { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import twoDigits from '../functions/twoDigits';

const ONE_SECOND = 1000;
let localSegundo = 0;

function useToStartPage(bool = false) {
  const {
    setHora,
    setMinuto,
    setSegundo,
    setClock,
  } = useContext(MyContext);

  useEffect(() => {
    setHora(twoDigits(0));
    setMinuto(twoDigits(0));
    setSegundo(twoDigits(0));
    if (bool) {
      setClock(setInterval(() => {
        setSegundo(twoDigits(localSegundo += 1));
      }, ONE_SECOND));
    }
  }, []);
}

export default useToStartPage;
