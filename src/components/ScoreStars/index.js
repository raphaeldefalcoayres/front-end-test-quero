import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import roundToHalf from '~/utils/roundToHalf';
import Star from '../Star';

export default function ScoreStars({ score }) {
  const rounded = roundToHalf(score);

  return (
    <Container>
      <Star step={1} scoreRoundedToHalf={rounded} />
      <Star step={2} scoreRoundedToHalf={rounded} />
      <Star step={3} scoreRoundedToHalf={rounded} />
      <Star step={4} scoreRoundedToHalf={rounded} />
      <Star step={5} scoreRoundedToHalf={rounded} />
    </Container>
  );
}

ScoreStars.propTypes = {
  score: PropTypes.number.isRequired,
};
