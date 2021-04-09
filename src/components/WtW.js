/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from './utils/MQs';
import React, { useState } from 'react';
import '../App.css';
import mejor from '../images/mejorcalidad.png';
import venice from '../images/venice.png';

function WtW() {
  const [color, setColor] = useState('white');

  const Bod = styled.div`
    margin: 0 auto;
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

  const Sides = styled.div`
    margin: 0 auto;
    display: flex;
    flexdirection: row;

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
  const Youtube = styled.iframe`
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

  const Image = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const Img = styled.img`
    margin: 0 auto;
    max-width: 657px;
    border-radius: 2px;
    margin-bottom: 20px;
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

  const buttons = css({
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'fixed',
    zIndex: 1,
    height: 45,
    marginTop: 70,
    width: '7%',
    marginRight: 20,
    marginLeft: 5,
  });

  const green = css({
    color: '#616161',
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
    color: '#333',
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
            <div className="color-mode" onClick={handleGreen} css={{ background: '#97ffa1c2' }}>
              <div></div>
            </div>
          )}
          {color === 'sepia' ? (
            <div css={noneSepia} />
          ) : (
            <div className="color-mode" onClick={handleSepia} css={{ background: '#fdd9ab' }}>
              <div></div>
            </div>
          )}
        </div>

        <div
          className="text"
          css={{
            margin: '0 auto',
            width: '93%',
          }}
        >
          <div className="essay">
            <Titulo css={{ marginTop: 20 }} className="titulo">
              Write to create Wealth
            </Titulo>
            <Image>
              {' '}
              <img src={mejor} className="me2" alt="profile pic" />{' '}
              <span css={{ color: 'rgb(152 152 152)', fontSize: '0.9rem' }}>
                <span css={{ color: 'pink' }}>Jose Ocampo</span>
                <br />
                April 8th, 2021 · 3 minutes reading time
              </span>
            </Image>
            <p css={{ color: 'rgba(117, 117, 117, 1)', fontSize: '1.4rem', lineHeight: '2.2rem' }}>
              Rationalizing why Im putting in the effort to create a writing habit.
            </p>
            <p>
              Writing does not come naturally to me, I have never been one to spontaneously sit down
              and write. I dont know why this is to be honest, seeing that I enjoy it quite a lot
              when I do it.
              </p>
              <p>
                Maybe it comes down to my skeptical nature (a habit Im trying to get rid off), why
                would other people be interested in reading what I have to say?{' '}
              </p>

            <p>
              Rationalizing that thought I know that it is clearly the wrong frame of mind. I am a firm believer that writing
              has multiple benefits that go beyond even the most apparent purpose of it,
              -communicating ideas in a fixed, time resistant format to others-.{' '}
            </p>
            <p>
              So, I have spent some time thinking about this, and I think my motivation for writing comes down to wealth
              creation. That is the macro purpose of why I want to write often.
            </p>
            <p>
              There is a really cool essay I read some time ago from Paul Graham which relates to this. It feels it is so cliche
              and over used to quote him at this point, but I think that is, again, the wrong frame to
              put things in, so allow me to make a stop.
            </p>
            <p>
              {' '}
              A much less quoted individual, Philip Rosenthal, a TV personality and host of a 
              Netflix show called "Somebody Feed Phil", 
              in one of the shows episodes wisely reasons:</p> 
              
              <p>"My favorite quote from
              baseball legend Yogi Berra is 'Nobody goes there anymore, it's too crowded', that is
              what smart sophisticasted world travellers would probably say about Venice, why go?
              there are so many tourists, it's over run, why would you go to such a turisty place?"
              </p>
              <p>
              And then he shouts: "Because it looks like this!"
            </p>
            <p>
              <Img src={venice} />
              <span style={{ color: 'grey', fontSize: '0.9rem' }}>
                Yes, i just compared Paul Graham with Venice
              </span>
            </p>
            <p>
              The point is, there is a reason why the man gets quoted so much, it's like the views in
              Venice, everywhere you look there is something precious.
            </p>
            <p>
              Anyways, the essay I read from PG is called <a href="http://paulgraham.com/wealth.html">How to Make Wealth</a>, 
              there he talks about something which really opened
              my eyes: "wealth is not the same as money, in fact, it's far from it, we can all create
              wealth by bringing new things into existence".
            </p>
            <p>
              He also talks about something he calls the Pie Fallacy. A lot of people think that the
              amount of wealth in the world is fixed, and it cant change. That is not true, you can
              create wealth and add to the world without necessarily taking away from others.
            </p>
            <p>
              So, creating new things literally creates wealth, in the form of potential value, to
              you and others, there was no essay before I decided to sit down for the 5th time today
              and actually start tiping, and now it exists.
            </p>
            <p>
              Will it create much wealth? I doubt that it will directly, but who knows the actual
              value of this tweet in its indirect dimensions, it is, after all, the start of my
              writing habit, it could lead me down any unexpected road, it could inspire someone,
              even if it's one person that reads it, it is impossible to calculate its real value at
              this time.
            </p>
            <p>
              Passively consuming is enteraining of course, we all need a certain amount of that
              too, but the average person nowadays consumes a lots more than they need and produces
              a lot less, and that is not good because we are losing a lot of wealth in the world that way, so
              one of my objectives is to place myself on the other side of the scale.
            </p>
            <p>
              And that is  my main reason, there are many other benefits of writing that I
              want to talk about in other occasions but the most important one is that I'm doing
              this to create wealth, to bring something into existence that wasn't there before,
              words, pages, visibility, inspiration, connections, possibilities.
            </p>
            <p>
              As magic as this age of leverage is, the minimum requirement to
              participate in it's gains is putting yourself out there, you have to actually
              produce something of value to you or other people to really reap it's benefits. You
              never know where you could end up, but you have to be willing to be vulnerable and
              put yourself out there.
            </p>
            <p>
              This is my first step towards that vulnerability, and all the benefits it can bring.
            </p>
            <p>Hope you join me!</p>
          </div>
        </div>
      </Sides>
      <div
        css={{
          margin: '0 auto',
          maxWidth: 600,
          color: 'rgb(152 152 152)',
          borderTop: '1px solid #aaa',
          marginTop: 61,
          textAlign: 'center',
          fontSize: '0.7rem',
          paddingTop: 20,
          paddingBottom: 40,
        }}
      >
 © Jose Ocampo, 2021 | Everything made by hand
      </div>
    </Bod>
  );
}

export default WtW;
