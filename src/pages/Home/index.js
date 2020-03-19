import React, { useState, useEffect } from 'react';

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

  function handleOpenModal() {
    setOpen(true);
  }
  function handleSetMyCourses() {
    console.log('handleSetMyCourses', selectCourses);
    setMyCourses(myCourses.concat(selectCourses));
    setOpen(false);
    localStorage.setItem(
      'myCourses',
      JSON.stringify(myCourses.concat(selectCourses))
    );
    setselectCourses([]);
  }

  useEffect(() => {
    console.log('myCourses', myCourses);
  }, [myCourses]);

  useEffect(() => {
    console.log('selectCourses', selectCourses);
  }, [selectCourses]);
  useEffect(() => {
    if (localStorage.getItem('myCourses')) {
      setMyCourses(JSON.parse(localStorage.getItem('myCourses')));
    }
  }, []);

  return (
    <Container>
      <Modal
        open={open}
        setOpen={setOpen}
        action={handleSetMyCourses}
        selectCourses={selectCourses}
        setselectCourses={setselectCourses}
      />
      <ContainerGlobal>
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/">Minha conta</BreadcrumbItem>
          <BreadcrumbItem active>Bolsas favoritas</BreadcrumbItem>
        </Breadcrumb>
        <h1>Bolsas Favoritas</h1>
        <h4>
          Adicione bolsas de cursos e faculdades do seu interesse e receba
          atualizações com as melhores ofertas disponíveis.
        </h4>
        <RowFilter>
          <ButtonGroup>
            <ButtonGroupItem checked="true">Todos os semestres</ButtonGroupItem>
            <ButtonGroupItem>2° semestre de 2019</ButtonGroupItem>
            <ButtonGroupItem>1° semestre de 2020</ButtonGroupItem>
          </ButtonGroup>
        </RowFilter>
        <RowScholarship>
          <ScholarshipAdd action={handleOpenModal} />
          {myCourses.length > 0 &&
            myCourses.map(course => (
              <Scholarship key={course.id} data={course} />
            ))}
        </RowScholarship>
      </ContainerGlobal>
    </Container>
  );
}
