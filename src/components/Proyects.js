/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from "react";
import styled from "styled-components";
import wip from  '../images/wip.png'
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import cgol from '../images/cgol.png'




const Proyects = () => {
const Tutto = styled.div`
    margin: 0 auto;
    padding-top: 120px;
    width: 700px;
    display: flex; 
    flex-direction: column;
    `
  const Titulo = styled.div`
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 500;
  `

  const Projects = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `
  const Project = styled.div`
    width: 45%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `

  const Img = styled.img`
    width: 300px;

`


  return (
  
   <div>
        <Tutto>
             <Titulo>Proyectos</Titulo>  
              <Projects>
                <Project><a href ="https://www.juegovida.com/"><h2 css={{textAlign: 'center'}}>Conways Game of Life</h2>
                <Img src={cgol}/></a>
                <p>Proyecto de Conway's Gamer of Life, mas info, etc, etc</p>
                </Project>
                </Projects>
        </Tutto>
   </div>
                
         

  );
};

export default Proyects;


