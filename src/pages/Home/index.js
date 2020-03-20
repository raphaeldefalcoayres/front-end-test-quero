import React, { useState, useEffect } from 'react';
import filter from 'lodash/filter';
import uuid from 'react-uuid';

import api from '~/services/api';
import formatMoney from '~/utils/formatMoney';

import { ContainerGlobal } from '~/styles/global';
import { Container, RowFilter, RowScholarship } from './styles';
import Breadcrumb from '~/components/Breadcrumb';
import BreadcrumbItem from '~/components/Breadcrumb/BreadcrumbItem';
import ButtonGroup from '~/components/ButtonGroup';
import ButtonGroupItem from '~/components/ButtonGroup/ButtonGroupItem';
import ScholarshipAdd from '~/components/ScholarshipAdd';
import Scholarship from '~/components/Scholarship';
import Modal from '~/components/Modal';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [myCourses, setMyCourses] = useState([]);
  const [selectCourses, setselectCourses] = useState([]);

  const [scholarship, setScholarship] = useState([]);
  const [cities, setCities] = useState([]);
  const [courses, setCourses] = useState([]);

  const [semesters, setSemesters] = useState([]);

  async function loadScholarship() {
    if (!localStorage.getItem('scholarship')) {
      const response = await api.get(
        'scholarship?_sort=university.name&_order=asc'
      );

      const arrayCities = [];
      const arrayCourses = [];
      const arraySemesters = [];

      const data = await response.data.map(item => {
        if (arrayCities.indexOf(item.campus.city) === -1)
          arrayCities.push(item.campus.city);

        if (arrayCourses.indexOf(item.course.name) === -1)
          arrayCourses.push(item.course.name);

        if (arraySemesters.indexOf(item.enrollment_semester) === -1)
          arraySemesters.push(item.enrollment_semester);

        return {
          id: uuid(),
          university_name: item.university.name,
          university_score: item.university.score,
          enabled: item.enabled,
          logo_url: item.university.logo_url,
          discount_percentage: item.discount_percentage,
          city_name: item.campus.city,
          course_name: item.course.name,
          course_level: item.course.level,
          course_kind: item.course.kind,
          course_shift: item.course.shift,
          price_with_discount: item.price_with_discount,
          price_with_discount_formated: formatMoney.format(
            item.price_with_discount
          ),
          full_price_formatted: formatMoney.format(item.full_price),
          enrollment_semester: item.enrollment_semester,
          start_date: item.start_date,
        };
      });

      localStorage.setItem('scholarship', JSON.stringify(data));
      localStorage.setItem('cities', JSON.stringify(arrayCities));
      localStorage.setItem('courses', JSON.stringify(arrayCourses));
      localStorage.setItem('semesters', JSON.stringify(arraySemesters));

      setScholarship(data);
      setCities(arrayCities);
      setCourses(arrayCourses);
      setSemesters(arraySemesters);
    } else {
      setScholarship(JSON.parse(localStorage.getItem('scholarship')));
      setCities(JSON.parse(localStorage.getItem('cities')));
      setCourses(JSON.parse(localStorage.getItem('courses')));
    }
  }

  function handleOpenModal() {
    setOpen(true);
  }

  function handleSetMyCourses() {
    const newMyCourses = myCourses.concat(selectCourses);
    setMyCourses(newMyCourses);
    setOpen(false);
    localStorage.setItem('myCourses', JSON.stringify(newMyCourses));
    setselectCourses([]);
  }

  function handleExcludeMyCourse(id) {
    const newMyCourses = filter(myCourses, o => {
      return o.id !== id;
    });
    setMyCourses(newMyCourses);
    localStorage.setItem('myCourses', JSON.stringify(newMyCourses));
  }

  function handleSelectSemester(semester) {
    let newMyCourses = JSON.parse(localStorage.getItem('myCourses'));
    if (semester !== '') {
      newMyCourses = filter(newMyCourses, { enrollment_semester: semester });
    }
    setMyCourses(newMyCourses);
  }

  useEffect(() => {
    loadScholarship();
    if (localStorage.getItem('myCourses')) {
      setMyCourses(JSON.parse(localStorage.getItem('myCourses')));
    }
    if (localStorage.getItem('semesters')) {
      setSemesters(JSON.parse(localStorage.getItem('semesters')));
    }
  }, []);

  return (
    <Container>
      <Modal
        open={open}
        setOpen={setOpen}
        data={{ scholarship, cities, courses }}
        action={handleSetMyCourses}
        selectCourses={selectCourses}
        setselectCourses={setselectCourses}
        myCourses={myCourses}
        setMyCourses={setMyCourses}
      />
      <ContainerGlobal>
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/">Minha conta</BreadcrumbItem>
          <BreadcrumbItem active>Bolsas favoritas</BreadcrumbItem>
        </Breadcrumb>
        <h1>Bolsas Favoritas</h1>
        <h4>
          Adicione os cursos e faculdades de seu interesse e receba atualizações
          com as melhores ofertas.
        </h4>
        <RowFilter>
          <ButtonGroup>
            <ButtonGroupItem
              checked="true"
              action={() => handleSelectSemester('')}
            >
              Todos os semestres
            </ButtonGroupItem>
            {semesters.map(semester => (
              <ButtonGroupItem key={semester} action={handleSelectSemester}>
                {semester}
              </ButtonGroupItem>
            ))}
          </ButtonGroup>
        </RowFilter>
        <RowScholarship>
          <ScholarshipAdd action={handleOpenModal} />
          {myCourses.length > 0 &&
            myCourses.map(course => (
              <Scholarship
                key={course.id}
                data={course}
                exclude={handleExcludeMyCourse}
              />
            ))}
        </RowScholarship>
      </ContainerGlobal>
    </Container>
  );
}
