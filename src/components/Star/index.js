import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

export default function Star({ scoreRoundedToHalf, step }) {
  function TheStar({ scoreRoundedToHalf }) {
    if (Math.floor(scoreRoundedToHalf) >= step) {
      return <FaStar />;
    }

    if (Math.round(scoreRoundedToHalf) === step) {
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
