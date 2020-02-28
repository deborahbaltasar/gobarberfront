import React from 'react';
import PropTypes from 'prop-types';

import Particles from 'react-particles-js';

import { Content, Container } from './styles';

const particleOpt = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 2800,
      }
    }
  }
}

export default function AuthLayout({ children }) {
  return (
    <Container>
      <Particles params={particleOpt} className= {"partic"} />

        <Content>
         {children}  
        </Content>
      
    </Container>
  );
}

AuthLayout.propType = {
  children: PropTypes.element.isRequired,
};
