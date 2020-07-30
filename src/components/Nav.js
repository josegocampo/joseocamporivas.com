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
  
       
      <Navigator>
          <NavaLinks>
  
              <Link to ='/'><Navalogo><img src={logo3} className='logo'/></Navalogo></Link>
              <NavATags>
               
                  <Link to="/course"><Nava>Cursos </Nava></Link>
                  <Link to="/essay"><Nava>Ensayos </Nava></Link>
                  <Link to="/garden"><Nava>Jardin Digital</Nava></Link>
                  <Link to="/proyects"><Nava>Proyectos</Nava></Link>
                  <Link to="/about"><Nava>Sobre mi</Nava></Link>
                
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
  align-items: flex-start;
  font-size: 0.8rem;
  font-weight: 600;
  width: 640px;
  padding-right: 40px;
`



const NavaLinks = styled.div`
margin: 0 auto;
display: flex;
justify-content: space-between;
width: 100%;
height: 60px;
align-items: center;
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
margin-left: 0%;

@media ${device.tablet}{
  display: none}
  
`

const Nava = styled.div`
letter-spacing: 1.1px;
text-transform: none;
margin-left: 25px;
color: rgb(102 184 222);
  &:hover {
    color: #e89049;

  }
`
