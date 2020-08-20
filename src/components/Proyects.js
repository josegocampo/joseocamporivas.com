/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from "react";
import styled from "styled-components";
import wip from '../images/wip.png'
import {device} from './utils/MQs'
import '../App.css';
import { Link } from "react-router-dom";
import cgol from '../images/cgol.png'




const Proyects = () => {
  const Tutto = styled.div`
    margin: 0 auto;
    padding-top: 30px;
    width: 700px;
    display: flex; 
    flex-direction: column;

    @media ${device.tablet}{
      max-width: 620px;
    
  }
  @media ${device.mobileL}{
    max-width: 468px;

}
@media ${device.mobileM}{
  max-width: 372px;

}
@media ${device.mobileS}{
  max-width: 365px;

}
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
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 0.8rem;
    letter-spacing: 0.5px;
    line-height: 1.3rem;
  `

  const Img = styled.img`
    width: 340px;
    
    @media ${device.tablet}{
      max-width: 620px;
    
  }
  @media ${device.mobileL}{
    max-width: 448px;

}
@media ${device.mobileM}{
  max-width: 352px;

}
@media ${device.mobileS}{
  max-width: 340px;

}

`


  return (

    <div>
      <Tutto>
        <Projects>
          <Project><a href="https://www.juegovida.com/"><h2 css={{ textAlign: 'center' }}></h2>
            <Img src={cgol} /></a>
            <p className="about">Autómata celular Diseñado por John Conway, uno de los más grandes matemáticos del Siglo XX. Mas información <Link to="conway">aquí.</Link><br />
            </p>
          </Project>
        </Projects>
      </Tutto>
    </div>



  );
};

export default Proyects;


