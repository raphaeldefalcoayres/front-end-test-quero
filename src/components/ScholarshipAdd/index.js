import React from 'react';
import PropTypes from 'prop-types';
import { IoIosAddCircleOutline } from 'react-icons/io';

import { Container } from './styles';

export default function ScholarshipAdd({ action }) {
  return (
    <Container onClick={() => action()}>
      <div>
        <IoIosAddCircleOutline size="70" color="#18ACC4 " />
        <h3>Adicionar curso</h3>
        <h6>
          Clique para adicionar bolsas de
          <br /> cursos do seu interesse
        </h6>
      </div>
    </Container>
  );
}

ScholarshipAdd.propTypes = {
  action: PropTypes.func,
};

ScholarshipAdd.defaultProps = {
  action: null,
};
