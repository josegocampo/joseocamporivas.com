import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo3 from '../images/logo3.png';
import '../App.css';
import { device } from './utils/MQs';

const Nav = (props) => {
  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <Navigator className="navs">
      <NavaLinks>
        <Link to="/">
          <Navalogo>
            <img src={logo3} className="logo" />
          </Navalogo>
        </Link>
        <NavATags>
          <Link to="/essays">
            <Nava>Essays </Nava>
          </Link>

          <Link to="/proyects">
            <Nava>Proyects</Nava>
          </Link>
          <a href="https://twitter.com/joeocountry">
            <Nava>Twitter</Nava>
          </a>
          <Link to="/about">
            <Nava>About</Nava>
          </Link>
        </NavATags>
      </NavaLinks>
    </Navigator>
  );
};

export default Nav;

const Navigator = styled.div`
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: flex-start;
  font-size: 0.9rem;
  max-width: 640px;
  padding-right: 5px;

  @media ${device.tablet} {
    font-size: 0.8rem;
  }
  @media ${device.mobileL} {
    padding-bottom: 20px;
    padding-left: 0px;
  }
  @media ${device.mobileS} {
    font-size: 0.8rem;
    padding-left: 2px;
  }
`;

const NavaLinks = styled.div`
  margin: 0 auto;
  display: flex;
  width: 80%;
  align-items: center;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: space-between;

  @media ${device.mobileL} {
    flex-direction: column;
    padding-top: 5px;
  }
`;

const Navalogo = styled.div``;

const NavATags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 3px;
`;

const Nava = styled.div`
  font-size: 1rem;
  font-weight: 500;
  text-transform: none;
  margin-left: 30px;
  color: #00b6fe;
  &:hover {
    color: #e89049;
  }
`;
