import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [hora, setHora] = useState(0);
  const [minuto, setMinuto] = useState(0);
  const [segundo, setSegundo] = useState(0);
  const [colon, setColon] = useState(':');
  const [inputHora, setInputHora] = useState(0);
  const [inputMinuto, setInputMinuto] = useState(0);
  const [inputSegundo, setInputSegundo] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [clock, setClock] = useState();

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
    inputHora,
    setInputHora,
    inputMinuto,
    setInputMinuto,
    inputSegundo,
    setInputSegundo,
    startTimer,
    setStartTimer,
    clock,
    setClock,
  };

  return (
    <MyContext.Provider value={ objContext }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MyProvider;
