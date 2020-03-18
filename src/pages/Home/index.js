import React, { useState } from 'react';

import { ContainerGlobal } from '~/styles/global';
import { Container, RowFilter, RowScholarship } from './styles';
import Breadcrumb from '~/components/Breadcrumb';
import BreadcrumbItem from '~/components/Breadcrumb/BreadcrumbItem';
import ButtonGroup from '~/components/ButtonGroup';
import ButtonGroupItem from '~/components/ButtonGroup/ButtonGroupItem';
import Scholarship from '~/components/Scholarship';
import Modal from '~/components/Modal';

export default function Home() {
  const [open, setOpen] = useState(false);

  function handleOpenModal() {
    setOpen(true);
  }
  function handleCancelMeetup() {
    setOpen(false);
  }

  return (
    <Container>
      <Modal open={open} setOpen={setOpen} action={handleCancelMeetup} />
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
          <Scholarship action={handleOpenModal} />
        </RowScholarship>
      </ContainerGlobal>
    </Container>
  );
}
