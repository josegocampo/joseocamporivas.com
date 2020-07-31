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
               
                  <Link to="/course"><Nava>Curso </Nava></Link>
                  <Link to="/essay"><Nava>Ensayos </Nava></Link>
                  <Link to="/garden"><Nava>Jardin Digital</Nava></Link>
                  <Link to="/proyects"><Nava>Proyectos</Nava></Link>
                  <Link to="/about"><Nava>Sobre mi</Nava></Link>
                
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
  padding-bottom: 20px;
  display: flex;
  align-items: flex-start;
  font-size: 0.8rem;
  font-weight: 600;
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
  }
  
 
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

@media ${device.mobileL}{
  flex-direction: column;
  padding-top: 5px;
}

`
// const NavaBurger = styled.div`
// margin: 0 auto;
// display: flex;
// justify-content: space-between;
// width: 100%;
// height: 60px;
// align-items: flex-end;
// padding-top: 25px;
// padding-bottom: 15px;

// @media ${device.tablet}{
//   font-size: 0.7rem;
  
// }
  
// `

const Navalogo = styled.div`
  `

const NavATags = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-bottom: 3px;  
`

const Nava = styled.div`
letter-spacing: 0.9px;
text-transform: none;
margin-left: 15px;
color: rgb(102 184 222);
  &:hover {
    color: #e89049;
  }
  @media ${device.mobileL}{
    margin-left: 10px;
  }

  @media ${device.mobileS}{
    margin-left: 7px;
  }

`
