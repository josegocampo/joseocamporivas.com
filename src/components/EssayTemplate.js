/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from 'styled-components';
import React, { useState } from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import '../App.css';
import { device } from './utils/MQs';
import mejor from '../images/mejorcalidad.png';
import Program from './Program';

function EssayTemplate(props) {
  const [color, setColor] = useState('white');

  const Bod = styled.div`
    margin: 0 auto;
  `;

  const Sides = styled.div`
    margin: 0 auto;
    display: flex;
    flexdirection: row;
    paddingtop: 40px;
    paddingleft: 5%;
    max-width: 730px;
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

  const buttons = css({
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 1,
    height: 40,
    marginTop: 170,
    paddingLeft: 20,
    maxWidth: 70,
  });

  const green = css({
    color: '#696969',
    background: '#dfffe2c2',
  });

  const black = css({
    color: 'white',
    background: 'black',
  });

  const sepia = css({
    color: '#795649',
    background: '#ffefdb',
  });

  const white = css({
    color: '#1a1a1a',
    background: 'white',
  });

  const none = css({
    display: 'none',
  });

  const tituloRojo = css({
    background: 'red',
  });

  const handleGreen = (e) => {
    setColor('green');
  };

  const handleBlack = (e) => {
    setColor('black');
  };

  const handleSepia = (e) => {
    setColor('sepia');
  };

  const handleWhite = (e) => {
    setColor('white');
  };

  let colorMode;

  if (color === 'white') {
    colorMode = white;
  } else if (color === 'green') {
    colorMode = green;
  } else if (color === 'black') {
    colorMode = black;
  } else if (color === 'sepia') {
    colorMode = sepia;
  }

  let noneWhite;
  let noneGreen;
  let noneBlack;
  let noneSepia;

  if (color === 'white') {
    noneWhite = none;
  } else if (color === 'green') {
    noneGreen = none;
  } else if (color === 'black') {
    noneBlack = none;
  } else if (color === 'sepia') {
    noneSepia = none;
  }

  return (
    <Bod className="App" css={colorMode}>
      <Sides className="left-right">
        <div css={buttons}>
          {color === 'white' ? (
            <div css={noneWhite} />
          ) : (
            <div className="color-mode" onClick={handleWhite} css={white}>
              <div></div>
            </div>
          )}
          {color === 'black' ? (
            <div css={noneBlack} />
          ) : (
            <div className="color-mode" onClick={handleBlack} css={black}>
              <div></div>
            </div>
          )}
          {color === 'green' ? (
            <div css={noneGreen} />
          ) : (
            <div className="color-mode" onClick={handleGreen} css={green}>
              <div></div>
            </div>
          )}
          {color === 'sepia' ? (
            <div css={noneSepia} />
          ) : (
            <div className="color-mode" onClick={handleSepia} css={sepia}>
              <div></div>
            </div>
          )}
        </div>

        <div
          className="text"
          css={{
            margin: '0 auto',
            fontSize: 14,
            lineHeight: 1.5,
            width: '85%',
            fontWeight: 300,
            marginLeft: '10%',
            fontWeight: 500,
          }}
        >
          <img src={mejor} className="me2" />

          <div className="essay"></div>
        </div>
      </Sides>
      <div
        css={{
          margin: '0 auto',
          maxWidth: 600,
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
    </Bod>
  );
}

export default EssayTemplate;
