import React from 'react';
import { MdInfoOutline, MdExpandMore } from 'react-icons/md';
import { FaWhatsapp, FaRegUserCircle } from 'react-icons/fa';
import logo from '~/assets/logo-querobolsa.svg';

import { ContainerGlobal } from '~/styles/global';
import { Container, Head, Nav, Separator, ProfileUser, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Head>
        <ContainerGlobal>
          <ul>
            <li>
              <a href="/">
                <MdInfoOutline /> <span>Como funciona</span>
                <small>Ajuda</small>
              </a>
            </li>
            <Separator />
            <li id="item-call">
              <a href="/">
                <FaWhatsapp color="#25D366" />
                <div>
                  <strong>0800 123 2222</strong>
                  <span>Envie uma mensagem ou ligue</span>
                </div>
              </a>
            </li>
          </ul>
          <Logo>
            <img src={logo} alt="logotipo" />
          </Logo>
          <ProfileUser>
            <div>
              <span>Nome sobrenome</span>
              <FaRegUserCircle /> <small>Conta</small>
            </div>
          </ProfileUser>
        </ContainerGlobal>
      </Head>
      <Nav>
        <ContainerGlobal>
          <small>Minha conta</small>
          <button type="button">
            Menu <MdExpandMore />
          </button>
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
