import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function TimerProvider({ children }) {
  const objContext = {

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
