import { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import twoDigits from '../functions/twoDigits';

function useSetTimer() {
  const {
    setSegundo,
    setStartTimer,
    segundo,
    setClock,
    reStart,
    setReStart,
  } = useContext(MyContext);

  const ONE_SECOND = 1000;
  let localSegundo = segundo;

  useEffect(() => {
    if (reStart) {
      setClock(setInterval(() => {
        setSegundo(twoDigits(localSegundo -= 1));
      }, ONE_SECOND));
      setStartTimer(false);
      setReStart(false);
    }
  }, [reStart]);
}

export default useSetTimer;
