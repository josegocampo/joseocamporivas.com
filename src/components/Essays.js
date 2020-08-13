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

  const LinkBox = styled.div`
    margin: 0 auto;
    width: 350px;
    display: flex;
    flex-direction: column;
  
  `


  return (
  
   <div>
        <Tutto>
             <Titulo>Ensayos</Titulo>  
             <LinkBox>         <Link to ="essay">Essay</Link>
                              <Link to ="/pizza">Pizza</Link>
                              <Link to ="/program">Program</Link>
                   
                       </LinkBox>
        </Tutto>
   </div>
                
         

  );
};

export default Proyects;


