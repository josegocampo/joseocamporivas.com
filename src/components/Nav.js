import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../images/logo.png'
import '../App.css';





const Nav = props => {
  return (

    <Navigator>
        <NavaLinks>
   
            <Link to ='/'><Navalogo><img className='logo' src={logo}/></Navalogo></Link>
            <NavATags>
                <Link to="/essay"><Nava>Ensayos </Nava></Link>
                <Link to="/about"><Nava>About</Nava></Link>
                <Link to="/proyects"><Nava>Proyectos</Nava></Link>
                <Link to="/contact"><Nava>Contacto</Nava> </Link>
            </NavATags>
      
          
        </NavaLinks>  
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
  width: 655px;
`;



const NavaLinks = styled.div`
margin: 0 auto;
display: flex;
justify-content: space-between;
width: 100%;
height: 60px;
align-items: flex-end;
padding-top: 25px;
padding-bottom: 15px;
`;

const Navalogo = styled.div`
  `;

const NavATags = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-bottom: 3px;
margin-right: 17%;
`;

const Nava = styled.div`
letter-spacing: 1.1px;
text-transform: none;
margin-right: 25px;
color: #7697a7;
  &:hover {
    color: #ff8989;

  }
`;;

