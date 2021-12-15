import React from 'react';
import { useContext, useState } from 'react/cjs/react.development';
import MyContext from '../context/MyContext';
import ButtonsTimer from './ButtonsTimer';

function InputButtons() {
  const {
    setStartTimer,
    clock,
    setReStart,
    setSegundo,
    setMinuto,
    setHora,
  } = useContext(MyContext);

  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [pause, setPause] = useState(true);
  const [unPause, setUnPause] = useState(false);

  const handleStart = () => {
    setStart(true);
    setStop(false);
    setPause(false);
    if (!unPause) {
      setStartTimer(true);
    }
    if (unPause) {
      setReStart(true);
      setUnPause(false);
    }
  };

  const handleStop = () => {
    clearInterval(clock);
    setSegundo('00');
    setMinuto('00');
    setHora('00');
    setStart(false);
    setStop(true);
    setPause(true);
  };

  const handlePause = () => {
    clearInterval(clock);
    setStart(false);
    setStop(true);
    setPause(true);
    setUnPause(true);
  };

  return (
    <nav>
      <ButtonsTimer handleClick={ handleStart } text="start" bool={ start } />
      <ButtonsTimer handleClick={ handleStop } text="stop" bool={ stop } />
      <ButtonsTimer handleClick={ handlePause } text="pause" bool={ pause } />
    </nav>

  );
}

export default InputButtons;
