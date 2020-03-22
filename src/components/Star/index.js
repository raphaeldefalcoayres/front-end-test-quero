import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

export default function Star({ scoreRoundedToHalf, step }) {
  function TheStar({ scoreRoundedToHalf }) {
    const ROUNDING_DOWN = Math.floor(scoreRoundedToHalf);
    const ROUNDING = Math.round(scoreRoundedToHalf);

    if (ROUNDING_DOWN >= step) {
      return <FaStar />;
    }

    if (ROUNDING === step) {
      return <FaStarHalfAlt />;
    }

    return <FaRegStar />;
  }

  return <TheStar scoreRoundedToHalf={scoreRoundedToHalf} />;
}

Star.propTypes = {
  scoreRoundedToHalf: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};
