import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import logo3 from  '../images/logo3.png'
import '../App.css';
import {device} from './utils/MQs'
import talk from '../images/talk.png' 



const Nav = props => {
  const showSettings = (event) => {
    event.preventDefault();
  }


  return (
  
       
      <Navigator className="navs">
          <NavaLinks>
  
              <Link to ='/'><Navalogo><img src={logo3} className='logo'/></Navalogo></Link>
              <NavATags>
              <Link to="/essays"><Nava>Essays </Nava></Link>
            
                  <Link to="/proyects"><Nava>Proyects</Nava></Link>
                  <a href="https://twitter.com/josegocampo"><Nava>Twitter</Nava></a>
                  <Link to="/about"><Nava>About</Nava></Link>
                
              </NavATags>
        
            
          </NavaLinks>  
{/* 
         <NavaBurger> 
           <Menu right>
              <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/essay">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a className="menu-item--small" href="">Settings</a>
          </Menu>

        
         </NavaBurger> */}
        </Navigator>
                
         

  );
};

export default Nav;


const Navigator = styled.div`
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: flex-start;
  font-size: 0.8rem;
  max-width: 640px;
  padding-right: 5px;

  @media ${device.tablet}{
    font-size: 0.7rem;
    padding-left: 10px;
  }
  @media ${device.mobileL}{
    padding-bottom: 20px;
    padding-left: 0px;
  }
  @media ${device.mobileS}{
    font-size: 0.6rem;
    padding-left: 2px;
  }
`

const NavaLinks = styled.div`
margin: 0 auto;
display: flex;
width: 80%;
height: 60px;
align-items: center;
padding-top: 5px;
padding-bottom: 5px;
padding-left: 15px;
padding-right: 15px;
justify-content: space-between;

@media ${device.mobileL}{
  flex-direction: column;
  padding-top: 5px;
}

`

const Navalogo = styled.div`
  `

const NavATags = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-bottom: 3px;  
`

const Nava = styled.div`
font-size: 0.85rem;
font-weight: 500;
text-transform: none;
margin-left: 15px;
color: #00b6fe;
  &:hover {
    color: #e89049;
  }
  @media ${device.mobileL}{
    margin-left: 10px;
  }

  @media ${device.mobileS}{
    margin-left: 7px;
  }
  @media ${device.mobileXS}{
    margin-left: 5px;
    font-size: 0.75rem;
  }

`
