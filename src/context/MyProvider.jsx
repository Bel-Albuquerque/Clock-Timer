import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function TimerProvider({ children }) {
  const [hora, setHora] = useState(0);
  const [minuto, setMinuto] = useState(0);
  const [segundo, setSegundo] = useState(0);
  const [colon, setColon] = useState(':');

  useEffect(() => {
    setColon(colon === ':' ? '' : ':');
  }, [segundo]);

  const objContext = {
    colon,
    hora,
    setHora,
    minuto,
    setMinuto,
    segundo,
    setSegundo,
  };

  return (
    <MyContext.Provider value={ objContext }>
      { children }
    </MyContext.Provider>
  );
}

TimerProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TimerProvider;
