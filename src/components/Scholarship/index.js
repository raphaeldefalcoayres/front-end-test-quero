import React from 'react';
import PropTypes from 'prop-types';

import { Container, Rate, Separator } from './styles';

export default function Scholarship({ data, action }) {
  return (
    <Container onClick={() => action()}>
      <img src={data.logo_url} alt={data.university_name} />
      <h5>{data.university_name}</h5>
      <h5>{data.course_name}</h5>
      <Rate>{data.course_rate}</Rate>
      <Separator />
      <h5>
        {data.course_kind} . {data.course_shift}
      </h5>
      <span>Início das aulas em: {data.start_date}</span>
      <Separator />
      <strong>Mensalidade com o Quero Bolsa:</strong>
      <small>
        <strike>{data.full_price_formatted}</strike>
      </small>
      <h4>
        {data.price_with_discount_formated}
        <small>/mês</small>
      </h4>
    </Container>
  );
}

Scholarship.propTypes = {
  data: PropTypes.object.isRequired,
  action: PropTypes.func,
};

Scholarship.defaultProps = {
  action: null,
};
