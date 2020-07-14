import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../images/logo.png'
import '../App.css';





const Nav = props => {
  return (

    <Navigator>

        
      
              <NavaLinks>
  
              <Link to ='/'><Navalogo><img  className='logo' src={logo}/> </Navalogo></Link>
            
            <NavATags>
                 <Router>
                        <Link to="/form"><Nava>Ensayos </Nava></Link>
                        <Link to="/"><Nava>About</Nava></Link>
                        <Link to="/"><Nava>Proyectos</Nava></Link>
                        <Link to="/"><Nava>Contacto</Nava> </Link>
                 </Router>
              
                 
            </NavATags>
          
              </NavaLinks>  
           
                
        
         </Navigator>
       
  );
};

export default Nav;



const Navigator = styled.div`
  height: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 600;
  border-bottom: 3px solid #131529;

  
  
  
`;

const Navalogo = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-right: 200px;
  `;

  
const Log = styled.div`
width: 300px;
height: 50px;

`;

const NavaLinks = styled.div`
display: flex;
justify-content: space-between;
width: 600px;
height: 60px;
margin: 0 auto;
padding-right: 150px;
align-items: flex-end;
`;


const NavATags = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
margin-left: 60px;

`;


const Nava = styled.div`
letter-spacing: 1.1px;
text-transform: none;
margin-right: 25px;
color: #131529;

  
  &:hover {
    color: #db74ff;
    border-bottom: 2px solid #3dade2;
  }
`;

const Button = styled.form`
  width: 150px;
  background: #222222;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;


 
 &:hover {
  background-color: fff;
  border-bottom: 1px solid white;
}
`;

