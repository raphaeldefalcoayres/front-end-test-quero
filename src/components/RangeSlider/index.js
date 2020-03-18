import React from 'react';
import { Container } from './styles';

export default function RangeSlider({ range, action }) {
  return (
    <Container>
      <span id="demo">{range}</span>
      <input
        type="range"
        min="100"
        max="10000"
        defaultValue="10000"
        className="slider"
        id="myRange"
        onChange={e => action(e)}
      />
    </Container>
  );
}
