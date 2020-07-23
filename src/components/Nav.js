import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import logo from '../images/logo.png'
import '../App.css';
import {device} from './utils/MQs'
import talk from '../images/talk.png' 



const Nav = props => {
  const showSettings = (event) => {
    event.preventDefault();
  }


  return (
  
       
      <Navigator>
          <NavaLinks>
  
              <Link to ='/'><Navalogo><img src={logo} className='logo'/></Navalogo></Link>
              <NavATags>
                  <Link to="/about"><Nava>About</Nava></Link>
                  <Link to="/essay"><Nava>Ensayos </Nava></Link>
                  <Link to="/articles"><Nava>Articulos</Nava></Link>
                  <Link to="/newsletter"><Nava>Newsletter</Nava> </Link>
                  <Link to="/proyects"><Nava>Proyectos</Nava></Link>
                  <Link to="/contact"><Nava>Hablemos</Nava> </Link>
              </NavATags>
        
            
          </NavaLinks>  

         <NavaBurger> 
           <Menu right>
              <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/essay">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a className="menu-item--small" href="">Settings</a>
          </Menu>

        
         </NavaBurger>
        </Navigator>
                
         

  );
};

export default Nav;


const Navigator = styled.div`
  margin: 0 auto;
  height: 60px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  width: 650px;
  

`



const NavaLinks = styled.div`
margin: 0 auto;
display: flex;
justify-content: space-between;
width: 100%;
height: 60px;
align-items: flex-end;
padding-top: 25px;
padding-bottom: 15px;
`
const NavaBurger = styled.div`
margin: 0 auto;
display: flex;
justify-content: space-between;
width: 100%;
height: 60px;
align-items: flex-end;
padding-top: 25px;
padding-bottom: 15px;

@media ${device.laptop}{
  display: none}
  
`

const Navalogo = styled.div`
  `

const NavATags = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-bottom: 3px;
margin-right: 0%;

@media ${device.tablet}{
  display: none}
  
`

const Nava = styled.div`
letter-spacing: 1.1px;
text-transform: none;
margin-right: 25px;
color: #7697a7;
  &:hover {
    color: #ff8989;

  }
`
