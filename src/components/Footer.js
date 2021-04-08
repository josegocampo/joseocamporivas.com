import { jsx, css } from '@emotion/core';
import React from 'react';
import styled from 'styled-components';
import { device } from './utils/MQs';

const Footer = () => {
  const Footer = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
  font-size: 0.8rem;
  max-width: 400px;
  padding-right: 5px;
  margin-top: 100px;
  color: #aaa;
  border-top: 1px solid #aaa;
  padding-top: 20px;

  @media ${device.tablet}{
    font-size: 0.7rem;
  }
  @media ${device.mobileL}{
  }
  @media ${device.mobileS}{
    font-size: 0.7rem;
  }
  }
  
 
`;

  return <Footer>© Jose Ocampo, 2020 | Todo hecho a mano</Footer>;
};

export default Footer;
