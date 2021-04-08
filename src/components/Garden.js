/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import wip from '../images/wip.png';
import '../App.css';

const Garden = () => {
  const Tutto = styled.div`
    margin: 0 auto;
    padding-top: 120px;
    width: 350px;
  `;
  const Titulo = styled.div`
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 500;
  `;

  const Wip = styled.img`
    margin: 0 auto;
    width: 350px;
  `;

  return (
    <div>
      <Tutto>
        <Titulo>Work in progress</Titulo>
        <Wip src={wip} />
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
      </Tutto>
    </div>
  );
};

export default Garden;
