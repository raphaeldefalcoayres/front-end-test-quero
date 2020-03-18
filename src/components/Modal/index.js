import React, { useState, useEffect } from 'react';
import {
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import filter from 'lodash/filter';
import omit from 'lodash/omit';
import overEvery from 'lodash/overEvery';
import orderBy from 'lodash/orderBy';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import {
  Container,
  Box,
  Title,
  SubTitle,
  Body,
  Footer,
  Close,
  ButtonDefault,
  ButtonAction,
  RowForm,
  InputGroup,
  SelectIcon,
  Checkbox,
  RowCheckbox,
  TableHead,
  ButtonOrder,
  TableList,
  ContainerTable,
} from './styles';
import RangeSlider from '../RangeSlider';

import api from '~/services/api';
import formatMoney from '~/utils/formatMoney';

export default function Modal({ open, setOpen, action }) {
  const [scholarship, setScholarship] = useState([]);
  const [scholarshipFilter, setScholarshipFilter] = useState([]);
  const [cities, setCities] = useState([]);
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [orderAsc, setOrderAsc] = useState(true);

  async function loadScholarship() {
    if (!localStorage.getItem('scholarship')) {
      const response = await api.get(
        'scholarship?_sort=university.name&_order=asc'
      );

      const arrayCities = [];
      const arrayCourses = [];

      const data = await response.data.map(item => {
        if (arrayCities.indexOf(item.campus.city) === -1)
          arrayCities.push(item.campus.city);

        if (arrayCourses.indexOf(item.course.name) === -1)
          arrayCourses.push(item.course.name);

        return {
          university_name: item.university.name,
          logo_url: item.university.logo_url,
          discount_percentage: item.discount_percentage,
          city_name: item.campus.city,
          course_name: item.course.name,
          course_level: item.course.level,
          course_kind: item.course.kind,
          price_with_discount: item.price_with_discount,
          price_with_discount_formated: formatMoney.format(
            item.price_with_discount
          ),
        };
      });

      localStorage.setItem('scholarship', JSON.stringify(data));
      localStorage.setItem('cities', JSON.stringify(arrayCities));
      localStorage.setItem('courses', JSON.stringify(arrayCourses));
      setScholarship(data);
      setScholarshipFilter(data);
      setCities(arrayCities);
      setCourses(arrayCourses);
    } else {
      setScholarship(JSON.parse(localStorage.getItem('scholarship')));
      setScholarshipFilter(JSON.parse(localStorage.getItem('scholarship')));
      setCities(JSON.parse(localStorage.getItem('cities')));
      setCourses(JSON.parse(localStorage.getItem('courses')));
    }
  }

  function filterByCity(e) {
    const city = e.target.value;
    if (e.target.value !== '') {
      setFilters({
        ...filters,
        city_name: o => {
          return o.city_name === city;
        },
      });
    }
  }

  function filterByCourse(e) {
    setFilters(omit(filters, ['course_name']));
    const course_name = e.target.value;
    if (e.target.value !== '') {
      setFilters({
        ...filters,
        course_name: o => {
          return o.course_name === course_name;
        },
      });
    }
  }

  function filterByKind(e) {
    const course_kind = e.target.value;
    if (course_kind === filters.course_kind) {
      setFilters(omit(filters, ['course_kind']));
    }
    if (e.target.checked) {
      setFilters({
        ...filters,
        course_kind: o => {
          return o.course_kind === course_kind;
        },
      });
    }
  }

  const [range, setRange] = useState(formatMoney.format(10000));

  function filterByRange(e) {
    const rangeValue = e.target.value;
    setRange(formatMoney.format(e.target.value));

    setFilters({
      ...filters,
      price_with_discount: o => {
        return o.price_with_discount <= rangeValue;
      },
    });
  }

  function handleChangeOrder() {
    setOrderAsc(!orderAsc);
    orderBy(scholarshipFilter, [
      'university_name',
      [orderAsc ? 'asc' : 'desc'],
    ]);
  }

  useEffect(() => {
    loadScholarship();
  }, []);

  useEffect(() => {
    setScholarshipFilter(
      filter(
        scholarship,
        overEvery(Object.keys(filters).map(key => filters[key]))
      )
    );
  }, [filters]); // eslint-disable-line

  return (
    <Container open={open}>
      <Box>
        <Close onClick={() => setOpen(false)}>
          <MdClose size={16} />
        </Close>
        <Title>Adicionar bolsa</Title>
        <SubTitle>Filtre e adicione as bolsas de seu interesse</SubTitle>
        <Body>
          {/* <form> */}
          <RowForm>
            <InputGroup>
              <label htmlFor="city">SELECIONE SUA CIDADE</label>
              <select id="city" onChange={e => filterByCity(e)}>
                <option value=""> </option>
                {cities.length > 0 &&
                  cities.map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
              <SelectIcon>
                <MdKeyboardArrowDown />
              </SelectIcon>
            </InputGroup>
            <InputGroup>
              <label htmlFor="course">
                SELECIONE O CURSO DE SUA PREFERÊNCIA
              </label>
              <select id="course" onChange={e => filterByCourse(e)}>
                <option value=""> </option>
                {courses.length > 0 &&
                  courses.map(course => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
              </select>
              <SelectIcon>
                <MdKeyboardArrowDown />
              </SelectIcon>
            </InputGroup>
          </RowForm>
          <RowForm>
            <InputGroup>
              <label htmlFor="kind-1">COMO VOCÊ QUER ESTUDAR?</label>
              <RowCheckbox>
                <Checkbox>
                  <label htmlFor="kind-1">
                    <input
                      type="checkbox"
                      name="kind"
                      id="kind-1"
                      value="Presencial"
                      onChange={e => filterByKind(e)}
                    />{' '}
                    <span>Presencial</span>
                  </label>
                </Checkbox>
                <Checkbox>
                  <label htmlFor="kind-2">
                    <input
                      type="checkbox"
                      name="kind"
                      id="kind-2"
                      value="EaD"
                      onChange={e => filterByKind(e)}
                    />{' '}
                    <span>A distância</span>
                  </label>
                </Checkbox>
              </RowCheckbox>
            </InputGroup>
            <InputGroup>
              <label htmlFor="myRange">ATÉ QUANTO PODER PAGAR?</label>
              <RangeSlider range={range} action={filterByRange} />
            </InputGroup>
          </RowForm>
          {/* </form> */}

          <TableHead>
            <h5>Resultado:</h5>
            <ButtonOrder onClick={() => handleChangeOrder()}>
              Ordenar por <b>Nome da Faculdade</b>{' '}
              {orderAsc ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
            </ButtonOrder>
          </TableHead>

          <ContainerTable>
            <TableList>
              <tbody>
                {scholarshipFilter.map((item, index) => (
                  <tr key={uuid()}>
                    <td>
                      <Checkbox>
                        <label htmlFor="study-type-2">
                          <input
                            type="checkbox"
                            name="study-type"
                            id="course"
                            value={index}
                          />{' '}
                        </label>
                      </Checkbox>
                    </td>
                    <td>
                      <div>
                        <img src={item.logo_url} alt={item.university_name} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <strong>{item.course_name}</strong>
                        <span>{item.course_level}</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          {' '}
                          Bolsa de <b>{item.discount_percentage}%</b>
                        </span>
                        <strong>{item.price_with_discount_formated}/mês</strong>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableList>
          </ContainerTable>
        </Body>
        <Footer>
          <ButtonDefault onClick={() => setOpen(false)}>Cancelar</ButtonDefault>
          <ButtonAction disabled={disabled} onClick={() => action()}>
            Adicionar bolsa(s)
          </ButtonAction>
        </Footer>
      </Box>
    </Container>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
};
