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
    margin-top: 30px;
 
    `

    const LinkBox = styled.div`
    margin: 0 auto;
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `
    const Article = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid lightgrey;
    align-items: flex-start;
  
    
    `
    

    const Headline = styled.div`
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 700;
  
  `

    const Titulo = styled.div`
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 700;
    &:hover {
      color: rgb(102 184 222);
    }
  `

  const Subtitulo = styled.div`
  color: #333;
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0px;
  text-align: left;
  line-height: 1.8rem;
  &:hover {
    color: lightgrey;
  }
`




  return (
  
   <div>
        <Tutto>
            
             <LinkBox>        
                             <Headline className="titulo" css={{fontSize: '3.7rem', marginBottom: 10}}>Todos los Articulos</Headline> 
                             <Link to ="/conway"><Article css={{borderTop: '1px solid lightgrey'}}> 
                              <Titulo className="titulo" >Un Genio Mágico y su Juego de la Vida</Titulo>
                               <Subtitulo>John Conway, uno de las grandes mentes del ultimo siglo creó el Juego de La Vida, un automata
                                 con unas propiedades insospechadas.
                               </Subtitulo>
                               </Article></Link>
                          
                   
                       </LinkBox>
        </Tutto>
   </div>
                
         

  );
};

export default Proyects;


