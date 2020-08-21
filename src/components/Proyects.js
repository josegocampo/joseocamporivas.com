/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from "react";
import styled from "styled-components";
import wip from '../images/wip.png'
import {device} from './utils/MQs'
import '../App.css';
import { Link } from "react-router-dom";
import cgol from '../images/cgol.png'
import espz from '../images/espz.jpg'




const Proyects = () => {
  const Tutto = styled.div`
    margin: 0 auto;
    padding-top: 30px;
    max-width: 730px;
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
    align-items: flex-start;
    @media ${device.tablet}{
      max-width: 628px;
      flex-direction: column;
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
  const Project = styled.div`
    width: 45%;
    height: 900px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 0.8rem;
    letter-spacing: 0.5px;
    line-height: 1.3rem;
    @media ${device.tablet}{
      max-width: 628px;
      width: 80%;
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

  const Img = styled.img`
    width: 320px;
    
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
            <Img src={cgol}   /></a>
            <p className="about">Autómata celular Diseñado por John Conway, uno de los más grandes matemáticos del Siglo XX. Hosteada en <a href="https://www.juegovida.com/">juegovida.com</a><br/><br/> Más información sobre el proyecto <Link to="conway">aquí.</Link><br /><br />
            <span style={{fontWeight: 600}}>Tecnologías:</span> JavaScript, React, Styled Components, Immer.   <br /><br />
            <span style={{fontWeight: 600}}>Status:</span><span style={{color: 'lightgreen'}}> MVP Done. </span>
            <br /><br />
            <span style={{fontWeight: 600}}>To do:</span> 
            <ul><li>Media Queries.</li>
            <li>Ability to resize Board.</li>
           </ul>
            </p>
          </Project>
          <Project><Link to="esperanza"><h2 css={{ textAlign: 'center' }}></h2>
            <Img src={espz} style={{width: 240}} /></Link>
            <p className="about">Aplicación de Golf encargada por club privado. Incluye bases de dato de jugadores, trackeo de scores, estadísticas, historial de juegos, etc.<br/><br/> Mas información sobre el proyecto <Link to="esperanza">aquí.</Link><br /><br />
            <span style={{fontWeight: 600}}>Tecnologías:</span> JavaScript, React, React Native, Redux, Styled Components, Node, Knex, SQL, REST API. 
            <br /><br />
            <span style={{fontWeight: 600}}>Status:</span> <span style={{color: 'purple'}}>En producción</span>. 
            <br /><br />
            <span style={{fontWeight: 600}}>To do:</span> 
            <ul><li>Host Backend to Heroku.</li>
            <li>Test endpoints in front-end.</li>
           </ul>
            </p>
          </Project>
        </Projects>
      </Tutto>
    </div>



  );
};

export default Proyects;


