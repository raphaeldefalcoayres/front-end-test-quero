import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

import { Container } from './styles';

export default function Scholarship() {
  return (
    <Container>
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
