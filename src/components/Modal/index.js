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
import find from 'lodash/find';
import differenceBy from 'lodash/differenceBy';

import PropTypes from 'prop-types';
import formatMoney from '~/utils/formatMoney';

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

export default function Modal({
  modalId,
  open,
  setOpen,
  data,
  action,
  selectCourses,
  // eslint-disable-next-line react/prop-types
  setselectCourses,
  filters,
  setFilters,
  myCourses,
}) {
  const [scholarshipFilter, setScholarshipFilter] = useState(data.scholarship);

  const [disabled, setDisabled] = useState(true);
  const [orderAsc, setOrderAsc] = useState(true);

  function filterByCity(e) {
    setFilters(omit(filters, ['city_name']));
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
    const course_kind_select = e.target.value;

    const options = document.querySelectorAll('[name=kind]');
    const options_checked = document.querySelectorAll('[name=kind]:checked');

    const filtered = {}.hasOwnProperty.call(filters, e.target.id);

    if (filtered) {
      setFilters(omit(filters, [e.target.id]));
    } else if (!e.target.checked) {
      setFilters({
        ...filters,
        [e.target.id]: o => {
          return o.course_kind !== course_kind_select;
        },
      });
    } else {
      setFilters({
        ...filters,
        [e.target.id]: o => {
          return o.course_kind === course_kind_select;
        },
      });
    }

    const TOTAL_CHECKBOXES_CHECKED = options_checked.length;
    const TOTAL_CHECKBOXES_EQUAL_CHECKBOXES_CHECKED =
      options.length === TOTAL_CHECKBOXES_CHECKED;

    if (
      TOTAL_CHECKBOXES_EQUAL_CHECKBOXES_CHECKED ||
      TOTAL_CHECKBOXES_CHECKED === 0
    ) {
      const filteredRemove = [];
      options.forEach(item => {
        filteredRemove.push(item.id);
      });

      setFilters(omit(filters, filteredRemove));
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
    setScholarshipFilter(
      orderBy(
        scholarshipFilter,
        ['university_name'],
        [orderAsc ? 'desc' : 'asc']
      )
    );
  }

  function handleSelectCourse(e) {
    const id = e.target.value;

    if (e.target.checked) {
      const filtered = filter(data.scholarship, { id })[0];

      const findedInMyCourses = find(myCourses, ['id', id]);
      const findedInSelectCourses = find(selectCourses, ['id', id]);

      if (!findedInMyCourses && !findedInSelectCourses) {
        setselectCourses([...selectCourses, filtered]);
        localStorage.setItem(
          'myCourses',
          JSON.stringify([...selectCourses, filtered])
        );
      }
    } else {
      const removed = filter(selectCourses, o => {
        return o.id !== id;
      });

      setselectCourses(removed);
      localStorage.setItem('myCourses', JSON.stringify(removed));
    }
  }

  useEffect(() => {
    const newScholarship = differenceBy(data.scholarship, myCourses, 'id');
    setScholarshipFilter(
      filter(
        newScholarship,
        overEvery(Object.keys(filters).map(key => filters[key]))
      )
    );
  }, [filters]); // eslint-disable-line

  useEffect(() => {
    if (selectCourses.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [selectCourses]);

  useEffect(() => {
    const newScholarship = differenceBy(data.scholarship, myCourses, 'id');
    setScholarshipFilter(newScholarship);
  }, [open, data.scholarship, myCourses]);

  return (
    <Container open={open} id={modalId}>
      <Box>
        <Close onClick={() => setOpen(false)}>
          <MdClose size={16} />
        </Close>
        <Title>Adicionar bolsa</Title>
        <SubTitle>Filtre e adicione as bolsas de seu interesse</SubTitle>
        <Body>
          <RowForm>
            <InputGroup>
              <label htmlFor="city">SELECIONE SUA CIDADE</label>
              <select id="city" onChange={e => filterByCity(e)}>
                <option value=""> </option>
                {data.cities.length > 0 &&
                  data.cities.map(city => (
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
                {data.courses.length > 0 &&
                  data.courses.map(course => (
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
              <label htmlFor="course_kind_presencial">
                COMO VOCÊ QUER ESTUDAR?
              </label>
              <RowCheckbox>
                <Checkbox>
                  <label htmlFor="course_kind_presencial">
                    <input
                      type="checkbox"
                      name="kind"
                      id="course_kind_presencial"
                      value="Presencial"
                      onChange={e => filterByKind(e)}
                    />{' '}
                    <span>Presencial</span>
                  </label>
                </Checkbox>
                <Checkbox>
                  <label htmlFor="course_kind_ead">
                    <input
                      type="checkbox"
                      name="kind"
                      id="course_kind_ead"
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

          <TableHead>
            <h5>Resultado:</h5>
            <ButtonOrder onClick={() => handleChangeOrder()}>
              Ordenar por{' '}
              <b>
                Nome da Faculdade{' '}
                {orderAsc ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
              </b>
            </ButtonOrder>
          </TableHead>

          <ContainerTable>
            <TableList>
              <tbody>
                {scholarshipFilter.map(item => {
                  return (
                    <tr id={`tr-${item.id}`} key={item.id}>
                      <td>
                        <Checkbox>
                          <label htmlFor={`checkbox-${item.id}`}>
                            <input
                              type="checkbox"
                              name="courses"
                              id={`checkbox-${item.id}`}
                              defaultValue={item.id}
                              onClick={e => handleSelectCourse(e)}
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
                          <div>
                            <strong>{item.course_name}</strong>
                            <span>{item.course_level}</span>
                          </div>

                          <div>
                            <span>
                              Bolsa de <b>{item.discount_percentage}%</b>
                            </span>
                            <strong>
                              {item.price_with_discount_formated}/mês
                            </strong>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
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
  selectCourses: PropTypes.arrayOf(PropTypes.object).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  setSelectCourses: PropTypes.func,
  myCourses: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.shape({
    scholarship: PropTypes.array,
    cities: PropTypes.array,
    courses: PropTypes.array,
  }),
  action: PropTypes.func.isRequired,
  modalId: PropTypes.string.isRequired,
  filters: PropTypes.objectOf(PropTypes.func),
  setFilters: PropTypes.func,
};

Modal.defaultProps = {
  data: {},
  setSelectCourses: null,
  setFilters: null,
  filters: {},
};
