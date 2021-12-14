import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function ClockDisplay() {
  const { hora, minuto, segundo, colon } = useContext(MyContext);

  return (
    <div>
      {hora}
      {!colon ? ' ' : colon}
      {minuto}
      {!colon ? ' ' : colon}
      {segundo}
    </div>
  );
}

export default ClockDisplay;
