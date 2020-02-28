import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav> 

        <aside>
          <Profile>
            <div>
              <strong>Deborah Baltasar</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img 
              scr="https://api.adorable.io/avatars/50/abott@adorable.png" 
              alt="Deborah Baltasar" 
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
