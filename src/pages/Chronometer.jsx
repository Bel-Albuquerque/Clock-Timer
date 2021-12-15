import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import ClockDisplay from '../components/ClockDisplay';
import useToStartPage from '../hocks/useToStartPage';
import useToControlChronometer from '../hocks/useToControlChronometer';

function Chronometer() {
  const {
    clock,
  } = useContext(MyContext);

  useToStartPage(true);

  useToControlChronometer();

  const handleStop = () => {
    clearInterval(clock);
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
