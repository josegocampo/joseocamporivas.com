/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from "react";
import styled from "styled-components";
import wip from  '../images/wip.png'
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




const Proyects = () => {
const Tutto = styled.div`
    margin: 0 auto;
    padding-top: 120px;
    width: 350px;
    `
  const Titulo = styled.div`
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 500;

  `

  const Wip = styled.img`
    margin: 0 auto;
    width: 350px;
  
  `


  return (
  
   <div>
        <Tutto>
             <Titulo>Proyectos</Titulo>  
              <h2><Link to="/cgol">Conways Game of Life</Link></h2>
        </Tutto>
   </div>
                
         

  );
};

export default Proyects;


