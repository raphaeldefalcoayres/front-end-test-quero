import React from 'react';
import {
  FaWhatsapp,
  FaRegHeart,
  FaRegEnvelope,
  FaRegComments,
} from 'react-icons/fa';
import { MdInfoOutline } from 'react-icons/md';

import { Container, RowContacts, RowFooter, Col } from './styles';
import { ContainerGlobal } from '~/styles/global';

export default function Footer() {
  return (
    <Container>
      <RowContacts>
        <ContainerGlobal>
          <Col>
            <FaWhatsapp size="42" />
            <div>
              <strong>0800 123 2222</strong>
              <b>0800 123 2222</b>
              <span>Seg - Sex 8h-22h</span>
              <small>Segunda a sexta de 8h às 22h</small>
            </div>
          </Col>
          <Col>
            <FaRegComments size="42" />
            <div>
              <strong>Chat ao vivo</strong>
              <b>Chat</b>
              <span>Seg - Sex 8h-22h</span>
            </div>
          </Col>
          <Col>
            <FaRegEnvelope size="42" />
            <div>
              <strong>Mande um e-mail</strong>
              <b>E-mail</b>
              <span>Respondemos rapidinho</span>
            </div>
          </Col>
          <Col>
            <MdInfoOutline size="42" />
            <div>
              <strong>Central de ajuda</strong>
              <b>Ajuda</b>
              <span>Encontre todas as respostas</span>
            </div>
          </Col>
        </ContainerGlobal>
      </RowContacts>
      <RowFooter>
        <ContainerGlobal>
          Feito com <FaRegHeart /> pela Quero Educação
        </ContainerGlobal>
      </RowFooter>
    </Container>
  );
}
