import React from 'react';
import { MdInfoOutline } from 'react-icons/md';
import { FaWhatsapp, FaRegUserCircle } from 'react-icons/fa';
import logo from '~/assets/logo-querobolsa.svg';

import { ContainerGlobal } from '~/styles/global';
import { Container, Head, Nav, Separator, ProfileUser } from './styles';

export default function Header() {
  return (
    <Container>
      <Head>
        <ContainerGlobal>
          <ul>
            <li>
              <a href="/">
                <MdInfoOutline /> Como funciona
              </a>
            </li>
            <Separator />
            <li>
              <a href="/">
                <FaWhatsapp color="#25D366" />
                <div>
                  <strong>0800 123 2222</strong>
                  <span>Envie uma mensagem ou ligue</span>
                </div>
              </a>
            </li>
          </ul>
          <img src={logo} alt="logotipo" />
          <ProfileUser>
            Nome sobrenome <FaRegUserCircle />
          </ProfileUser>
        </ContainerGlobal>
      </Head>
      <Nav>
        <ContainerGlobal>
          <ul>
            <li>
              <a href="/">Minha conta</a>
            </li>
            <li>
              <a href="/">Pré-matriculas</a>
            </li>
            <li>
              <a href="/" className="active">
                Bolsas favoritas
              </a>
            </li>
          </ul>
        </ContainerGlobal>
      </Nav>
    </Container>
  );
}
