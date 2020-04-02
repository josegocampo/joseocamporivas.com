import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";





const Nav = props => {
  return (

    <Navigator>

        
            <NavaLinks>

            <Navalogo><img  className='justice'/> tribunal digital</Navalogo>
          
          <NavATags>
               <Router>
                      <Link to =''> <Nava>Home</Nava></Link>
                      
                      <Link to="/form"><Nava>Servicios </Nava></Link>
                   
                       <Link to="/"><Nava>Arbitros </Nava></Link>
                       
                      <Link to="/"><Nava>Reglamento</Nava></Link>
              
                      <Link to="/"><Nava>Contacto</Nava> </Link>
               </Router>
            
               
          </NavATags>
        
            </NavaLinks>  
                
        
         </Navigator>

  );
};

export default Nav;



const Navigator = styled.div`
  height: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  
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
`;


const NavATags = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;


const Nava = styled.div`
letter-spacing: 1.1px;
text-transform: none;
margin-right: 25px;

  
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

