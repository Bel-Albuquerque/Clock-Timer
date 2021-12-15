import React from 'react';
import PropTypes from 'prop-types';

function ButtonsTimer({ handleClick, text, bool }) {
  return (
    <button
      type="button"
      onClick={ handleClick }
      disabled={ bool }
    >
      { text }
    </button>

  );
}

ButtonsTimer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  bool: PropTypes.bool.isRequired,
};

export default ButtonsTimer;
