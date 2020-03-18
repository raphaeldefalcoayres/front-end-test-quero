import React from 'react';
import PropTypes from 'prop-types';
import { IoIosAddCircleOutline } from 'react-icons/io';

import { Container } from './styles';

export default function Scholarship({ action }) {
  return (
    <Container onClick={() => action()}>
      <div>
        <IoIosAddCircleOutline size="70" color="#18ACC4 " />
        <h3>Adicionar bolsa</h3>
        <h6>
          Clique para adicionar bolsas de
          <br /> cursos do seu interesse
        </h6>
      </div>
    </Container>
  );
}

Scholarship.propTypes = {
  action: PropTypes.func,
};

Scholarship.defaultProps = {
  action: null,
};
