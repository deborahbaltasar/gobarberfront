import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import header from '../../assets/header.svg';

export default function Header() {

  return (
    <Container>
      <Content>
        <nav>
          <img src={header} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        
        <aside>
          <Profile>
            <div>
              <strong>Deborah Baltasar</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src={
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Test User"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}