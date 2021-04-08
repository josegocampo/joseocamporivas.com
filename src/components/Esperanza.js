/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import esperanza from '../images/espz.jpg';
import hcf from '../images/hcf.png';
import hcb from '../images/hcb.png';
import '../App.css';
import { device } from './utils/MQs';

const Esperanza = () => {
  return (
    <div>
      <Tutto className="essay">
        <Sides>
          <Titulo className="titulo">App de Golf la Esperanza</Titulo>

          <p>Aplicación encargada por un club de Golf Privado.</p>

          <p>
            <span style={{ fontWeight: 600 }}>Problema:</span> Club de Golf la Esperanza necesita
            llevar una base de dato con sus jugadores, scores, handicaps, partidos jugados, que
            tambien tenga sistema donde anotar mientras juegan y que les permita ver estadísticas,
            etc.{' '}
          </p>

          <p>
            <span style={{ fontWeight: 600 }}>Solución:</span> App Web y app móvil con base de dato
            relacional.
          </p>
          <p>
            <span style={{ fontWeight: 600 }}>Tecnologías:</span> JavaScript, React, React Native,
            Redux, Styled Components, Figma para el Front. Node, Knex, SQL, REST API y Base de Datos
            Relacional para el Back.
          </p>

          <Img src={esperanza} />

          <p
            style={{
              color: 'grey',
              fontSize: '1rem',
              marginTop: 10,
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            Vista del Landing.
          </p>

          <p>
            Para el Landing page use de fondo una foto de la cancha de golf y sobre ella puse 3
            botones semi transparentes que te llevan a las 3 principales secciones de la aplicación.
          </p>
          <p>
            Ingresar un Score, donde puedes iniciar una partida y ir anotando los scores tuyos y de
            otros compañeros. Ver Juegos Pasados, donde puedes revisar todos los últimos partidos
            que se han jugado, quienes los jugaron y sus scores. Revisar Estadísticas, donde puedes
            ver tu historial de handicap, el de otros jugadores, scores historicos, juegos ganados,
            etc.
          </p>

          <p>
            El logo lo hice en Figma, es una foto de la casa del club, a la cual le aplique ciertos
            filtros para darle una tonalidad anticuada y que combine mejor con la barra del nav que
            también tiene un aspecto old school.
          </p>
          <p>
            Clickeando en Ingresar Score ya empieza la lógica. La aplicación te lleva a una pantalla
            donde puedes seleccionar los jugadores que van a participar de la ronda y luego te
            empuja hacia la pantalla donde el usuario va a anotar los scores.
            <Img src={hcf} />
            <p
              style={{
                color: 'grey',
                fontSize: '1rem',
                marginTop: 10,
                marginBottom: 10,
                textAlign: 'center',
              }}
            >
              Vista del Tablero de Score (aún faltan los estilos definitivos).
            </p>
          </p>
          <p>
            La lógica de los scores no es demasiado complicada, pero si me llevo tiempo hacerla ya
            que las reglas del golf son complicadísimas y hay 3 tipos de scores distintos que
            trackear que tienen distintas condiciones, en base al hándicap del jugador y en base al
            hándicap de la cancha, score Neto, Gross y de Handicap.
          </p>
          <p></p>
          <p>
            No los voy a aburrir aquí con los detalles, pero para quien tenga más interés, les
            compartdo a las{' '}
            <a href="https://www.usga.org/handicapping/roh/2020-rules-of-handicapping.html">
              reglas de hándicap de la USGA
            </a>
          </p>

          <p>
            {' '}
            Quedo hecho el tablero, sin mayores estilos aún, pero con todas las funcionalidades
            listas.
          </p>
          <p>
            El flujo del estado lo voy a manejar con Redux, con el cual ya tengo experiencia y me
            gusta mucho usar.{' '}
          </p>

          <Img src={hcb} />

          <p
            style={{
              color: 'grey',
              fontSize: '1rem',
              marginTop: 10,
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            Vista de la tabla relacional del backend.
          </p>

          <p>
            El Backend esta escrito en Node, con endpoints de RESTful API y una Base de Datos
            Relacional.
          </p>

          <p>
            Todos los EndPoints y las tablas estan listas y probadas. Para testearlas ocupe
            Insomnia, que te permite hacer requests al backend y visualizar las respuestas JSON de
            manera perfecta. Es un software realmente útil para testear el Back.
          </p>
          <p>
            Solo me falta hostear el Backend, para lo cual voy a usar Heroku, que es con lo que ya
            tengo mayor experiencia y me ha funcionado bien.
          </p>

          <p>
            <span style={{ fontWeight: 600 }}>To do:</span> Primeros pasos a seguir para llegar al
            MVP son: Subir el backend a Heroku, terminar de integrar el flujo con Redux, hacer la
            página de estadísticas e historial de juegos.{' '}
          </p>

          <div
            css={{
              margin: '0 auto',
              width: '100%',
              color: '#aaa',
              borderTop: '1px solid #aaa',
              marginTop: 61,
              textAlign: 'center',
              fontSize: '0.7rem',
              paddingTop: 20,
              paddingBottom: 40,
            }}
          >
            © Jose Ocampo, 2020 | Todo hecho a mano
          </div>
        </Sides>
      </Tutto>
    </div>
  );
};

export default Esperanza;

const Tutto = styled.div`
  margin: 0 auto;
`;
const Sides = styled.div`
  margin: 0 auto;
  max-width: 730px;
  padding-left: 5px;
  @media ${device.tablet} {
    max-width: 628px;
  }
  @media ${device.mobileL} {
    padding: 15px;
    max-width: 468px;
  }
  @media ${device.mobileM} {
    max-width: 372px;
  }
  @media ${device.mobileS} {
    max-width: 365px;
  }
`;
const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.5rem;

  @media ${device.tablet} {
    font-size: 2.9rem;
  }
  @media ${device.mobileL} {
    max-width: 380px;
    font-size: 2.5rem;
    line-height: 3rem;
  }
  @media ${device.mobileM} {
    width: 340px;
    font-size: 2.2rem;
    line-height: 2.8rem;
  }
  @media ${device.mobileS} {
    max-width: 330px;
  }
  @media ${device.mobileXS} {
    max-width: 300px;
  }
`;

const Img = styled.img`
  margin: 0 auto;
  max-width: 657px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;

  @media ${device.tablet} {
    max-width: 570px;
  }

  @media ${device.tabletS} {
    max-width: 470px;
  }
  @media ${device.mobileL} {
    max-width: 350px;
  }
  @media ${device.mobileM} {
    width: 310px;
  }
  @media ${device.mobileS} {
    max-width: 300px;
  }
  @media ${device.mobileXS} {
    max-width: 260px;
  }
`;
