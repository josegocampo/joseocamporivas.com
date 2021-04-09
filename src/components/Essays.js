/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import wip from '../images/wip.png';
import { device } from './utils/MQs';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Proyects = () => {
  const Tutto = styled.div`
    margin: 0 auto;
    margin-top: 30px;
    max-width: 730px;
  `;

  const LinkBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    @media ${device.tablet} {
      max-width: 628px;
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
  const Article = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid lightgrey;
    align-items: flex-start;
    @media ${device.tablet} {
      max-width: 570px;
    }
    @media ${device.mobileL} {
      max-width: 420px;
    }
    @media ${device.mobileM} {
      max-width: 350px;
    }
    @media ${device.mobileS} {
      max-width: 340px;
    }
  `;

  const Headline = styled.div`
    color: #333;
    font-size: 2.1rem;
    margin-bottom: 15px;
    text-align: left;
    font-weight: 700;

    @media ${device.mobileL} {
      font-size: 2.2rem;
    }
  `;

  const Titulo = styled.div`
    color: #333;
    font-size: 2.2rem;
    margin-bottom: 15px;
    text-align: left;
    font-weight: 700;
    &:hover {
      color: rgb(102 184 222);
    }
    @media ${device.mobileL} {
      font-size: 2rem;
    }
  `;

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
  `;

  return (
    <div>
      <Tutto>
        <LinkBox>
          <Headline className="titulo" css={{ fontSize: '3.7rem', marginBottom: 10 }}>
            Essays
          </Headline>
          <Link to="/wtw">
            <Article css={{ borderTop: '1px solid lightgrey' }}>
              <Titulo className="titulo">Write to create Wealth</Titulo>
              <Subtitulo>
              Rationalizing why Im putting in the effort to create a writing habit.
              </Subtitulo>
            </Article>
          </Link>
        </LinkBox>
      </Tutto>
    </div>
  );
};

export default Proyects;
