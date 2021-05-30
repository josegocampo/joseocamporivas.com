/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import wip from '../images/wip.png';
import { device } from './utils/MQs';
import '../App.css';
import { Link } from 'react-router-dom';
import cgol from '../images/cgol.png';
import espz from '../images/espz.jpg';

const Proyects = () => {
  const Tutto = styled.div`
    margin: 0 auto;
    max-width: 730px;
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
      max-width: 620px;
    }
    @media ${device.mobileL} {
      max-width: 468px;
    }
    @media ${device.mobileM} {
      max-width: 372px;
    }
    @media ${device.mobileS} {
      max-width: 365px;
    }
  `;
  const Titulo = styled.div`
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 500;
  `;

  const Projects = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    @media ${device.tablet} {
      max-width: 628px;
      flex-direction: column;
    }
    @media ${device.mobileL} {
      max-width: 468px;
    }
    @media ${device.mobileM} {
      max-width: 372px;
    }
    @media ${device.mobileS} {
      max-width: 365px;
    }
  `;
  const Project = styled.div`
    width: 45%;
    height: 850px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    font-size: 0.8rem;
    letter-spacing: 0.5px;
    line-height: 1.3rem;
    @media ${device.tablet} {
      max-width: 628px;
      width: 80%;
    }
    @media ${device.mobileL} {
      max-width: 468px;
    }
    @media ${device.mobileM} {
      max-width: 372px;
    }
    @media ${device.mobileS} {
      max-width: 365px;
    }
  `;

  const Img = styled.img`
    width: 320px;

    @media ${device.tablet} {
      max-width: 620px;
    }
    @media ${device.mobileL} {
      max-width: 448px;
    }
    @media ${device.mobileM} {
      max-width: 352px;
    }
    @media ${device.mobileS} {
      max-width: 340px;
    }
  `;

  return (
    <div>
      <Tutto>
        <Projects>
          <Project>
            <a href="https://www.juegovida.com/">
              <h2 css={{ textAlign: 'center' }}></h2>
              <Img src={cgol} />
            </a>
            <p className="about">
              First Spanish Web Version of the cellular Automata designed by John Conway, one of the
              greatest mathematicians of the XXth century. Live at{' '}
              <a href="https://www.juegovida.com/">juegovida.com</a>
              <br />
              <br /> More info about the project in a Spanish Essay I wrote{' '}
              <Link to="conway">here.</Link>
              <br />
              <br />
              <span style={{ fontWeight: 600 }}>Technologies:</span> JavaScript, React, Styled
              Components, Immer. <br />
              <br />
              <span style={{ fontWeight: 600 }}>Status:</span>
              <span style={{ color: 'lightgreen' }}> Live. </span>
              <br />
              <br />
              <span style={{ fontWeight: 600 }}>To do:</span>
              <ul>
                <li>Media Queries.</li>
                <li>Ability to resize Board.</li>
              </ul>
            </p>
          </Project>
          <Project>
            <Link to="esperanza">
              <h2 css={{ textAlign: 'center' }}></h2>
              <Img src={espz} style={{ width: 240 }} />
            </Link>
            <p className="about">
              App for Golf Scoring and Stat Tracking for a Private Golf Club. Includes databases for
              players, score tracking, siatistics, game history, and more.
              <br />
              <br />
              More info about it <Link to="esperanza">here.</Link>
              <br />
              <br />
              <span style={{ fontWeight: 600 }}>Technologies:</span> JavaScript, React, React
              Native, Redux, Styled Components, Node, Knex, SQL, REST API.
              <br />
              <br />
              <span style={{ fontWeight: 600 }}>Status:</span>{' '}
              <span style={{ color: 'purple' }}>In production</span>.
              <br />
              <br />
              <span style={{ fontWeight: 600 }}>To do:</span>
              <ul>
                <li>Finish working on Game History</li>
                <li>Add Authentication.</li>
              </ul>
            </p>
          </Project>
        </Projects>
      </Tutto>
    </div>
  );
};

export default Proyects;
