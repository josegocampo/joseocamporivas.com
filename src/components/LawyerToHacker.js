/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from './utils/MQs';
import React, { useState } from 'react';
import '../App.css';
import mejor from '../images/mejorcalidad.png';
import venice from '../images/venice.png';

function LawyerToHacker() {
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
    margin-bottom: 10px;

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
    height: 70,
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
            fontSize: 14,
            lineHeight: 1.5,
            width: '85%',
            fontWeight: 300,
            marginLeft: '10%',
            fontWeight: 500,
          }}
        >
          <div className="essay">
            <Titulo css={{ marginTop: 20 }} className="titulo">
              From Lawyer to Hacker
            </Titulo>
            <Image>
              {' '}
              <img src={mejor} className="me2" alt="profile pic" />{' '}
              <span css={{ color: 'rgb(152 152 152)', fontSize: '0.9rem' }}>
                <span css={{ color: 'pink' }}>Jose Ocampo</span>
                <br />
                May 21, 2021 · 4 minutes reading time
              </span>
            </Image>
            <p
              css={{
                color: 'rgba(117, 117, 117, 1)',
                fontSize: '1.4rem',
                lineHeight: '2.2rem',
                marginTop: '15px',
              }}
            >
              Why I dropped the suit and decided to become a programmer.
            </p>
            <p>
              After 6 years as an Online Professional Poker Player, which seemed like a whole
              career, It was time to decide my next move.
            </p>
            <p>
              Poker provided some of the most fun times of my life, and it was incredibly mentally
              challenging and competitive, two things I love. I had spent all my life being a good
              student and had attended Law School but with Poker was when I really learned how to
              study hard and earn my living.
            </p>

            <p>
              On the other side, freedom, self-employment, a lot of money for a young kid is a
              helluva combination.
            </p>
            <p>
              I battled some of the best, got a sponsorship, traveled all over the world, taught and
              coached people from 11 different countries, but, it was clear that as much as I
              enjoyed it at times (and at times hated it), Poker wasn't the passion project of my
              life.{' '}
            </p>
            <p>
              Neither was it sustainable long-term anymore, Black Friday **link**, Game Theory
              Optimization software, bots, too many good pro competitors, and too few recreational
              players, were making it incredibly hard and stressful to make a good living at it, and
              the mid and long term looked very unattractive.
            </p>
            <p>
              {' '}
              Still young at 28 years old I already had almost 3.5 -out of 6- years of Law School
              credits on my belt, and seeing as being a Lawyer brings a lot of potentially useful
              benefits I took to finish that while I thought about my next move.
            </p>

            <p>
              As I was already going back to finish it, I thought I might as well get a bit of
              experience on the subject at hand and took an opportunity to work at an entry position
              as an associate in a Corporate Law firm.
            </p>
            <p>It was everything I expected it to be, ...boring.</p>

            <p>
              Plenty of repetitive tasks, outdated hardware, and software, going over case files
              that seemed meaningless looking for loopholes, grueling manual tasks, filing physical
              documents, looking for lost notary papers, the whole package.
            </p>
            <p>
              Well, It wasn’t all bad, to be honest, I had to do a few research assignments which I
              enjoyed quite a bit, looking for new solutions to unsolved problems is something I
              love to do.
            </p>
            <p>
              I even managed to get a big win for the firm. I found a solution for a multi-million
              dollar regulatory issue involving a big real state project that was going to be shut
              down by authorities, and I solved it while being the most junior person on the firm
              and having 5 lawyers on the case, all while getting paid close to minimum wage, lol.
            </p>
            <p>
              You'd imagine I'd get an instant long-term offer and a pay jump of course, but no, the
              form of payment was not even being told when we presented the solution to the client,
              with a report which I wrote 80%+ of.
            </p>
            <p>
              Not that I was owed anything, I was just doing my job, but I'd probably handle things
              differently if it was me.
            </p>
            <p>
              Anyways, I have never seen a redder red face than the one of the Partner in charge of
              the case when I, innocently, asked him when we’re presenting the case to the client
              and he told me we already had yesterday.
            </p>
            <p>
              The drop that filled the glass was when I presented the Partners with a piece of
              software I had found that was already being used in several other countries that could
              help us reduce our case tracking time by around 4 hours per day. Considering the
              average hourly rate of a junior associate was around $200 dollars per hour, I thought,
              they are going to love me for this!, $800 saved per day, which could be upwards of 16k
              a month.
            </p>
            <p>
              To my surprise, yes I still had some left in me at the time, they told me they were
              going to look into it, and after my inquiry the next day they told me thanks but no
              thanks.
            </p>
            <p>
              I later realized, after talking with countless other lawyers and gaining more industry
              experience, there are only a certain amount of hours each attorney can work each day,
              and the Firm charges its clients by the number of hours their employers spend working
              for them, so little do they care if an attorney can do 5, or 10 times the work in one
              hour, they still only have an hour to charge for, so the incentive to innovate or
              optimize is just not there, they don’t even consider it, its negligible,
              uninteresting.
            </p>
            <p>
              It was enough evidence for me to prove that this was going to be a short career in
              Corporate Law, so, I started looking for ways to get into programming, which had a lot
              more to do with the innovative and problem-solving environment I had been used to
              while playing poker and provided the connection to the digital world, where I had
              always been immersed from a young age, online forums (yay gamewinners.com), online
              games, etc.
            </p>
            <p>
              That is when I found about Lambda School and I started dabbling into software
              development and computer science, a decision which I couldn’t be happier and more
              grateful for.
            </p>
            <p>The rest will be a story for another day :)</p>
            <p>Thanks for reading this far</p>
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

export default LawyerToHacker;
