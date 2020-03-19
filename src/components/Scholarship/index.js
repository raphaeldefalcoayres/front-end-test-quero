import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Rate,
  Separator,
  UniversityName,
  CourseName,
  CourseKindAndShift,
  CourseStartDate,
  TitleMonthlyFee,
  OldPrice,
  Price,
  Footer,
  ButtonExclude,
  ButtonShowOffer,
} from './styles';
import ScoreStars from '../ScoreStars';

export default function Scholarship({ data, action }) {
  return (
    <Container>
      <img src={data.logo_url} alt={data.university_name} />
      <UniversityName>{data.university_name}</UniversityName>
      <CourseName>{data.course_name}</CourseName>
      <Rate>
        {data.university_score} <ScoreStars score={data.university_score} />
      </Rate>
      <Separator />
      <CourseKindAndShift>
        {data.course_kind} . {data.course_shift}
      </CourseKindAndShift>
      <CourseStartDate>Início das aulas em: {data.start_date}</CourseStartDate>
      <Separator />
      <TitleMonthlyFee>Mensalidade com o Quero Bolsa:</TitleMonthlyFee>
      <OldPrice>{data.full_price_formatted}</OldPrice>
      <Price>
        {data.price_with_discount_formated}
        <small>/mês</small>
      </Price>
      <Footer>
        <ButtonExclude>Excluir</ButtonExclude>
        <ButtonShowOffer>Ver oferta</ButtonShowOffer>
      </Footer>
    </Container>
  );
}

Scholarship.propTypes = {
  data: PropTypes.string.isRequired,
  action: PropTypes.func,
};

Scholarship.defaultProps = {
  action: null,
};
