/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from 'styled-components';
import { device } from './utils/MQs';
import React, { useState } from 'react';
import '../App.css';
import mejor from '../images/mejorcalidad.png';
import lenny from '../images/lenny1.png';
import greg from '../images/greg1.png';
import sahil from '../images/sahil1.png';

function Maven() {
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
    width: 95%;
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
              Maven Application
            </Titulo>
            <Image>
              {' '}
              <img src={mejor} className="me2" alt="profile pic" />{' '}
              <span css={{ color: 'rgb(152 152 152)', fontSize: '0.9rem' }}>
                <span css={{ color: 'pink' }}>Jose Ocampo</span>
                <br />
                May 30th, 2021 · 4 minutes reading time
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
              I talked with some of Maven's VIP creators and students to find out how we could
              improve their experience while creating, running or attending to courses.
            </p>
            <div
              style={{
                fontWeight: 600,
                paddingTop: '20px',
                paddingBottom: '10px',
              }}
            >
              Why do I want to join Maven?
            </div>
            <p>
              The future of education and collaboration is the space I'm the most passionate about
              right now, and Maven is the most exciting place I can think of to work on those
              problems.
            </p>
            <p>
              I experienced the power of Cohort-Based Courses first hand after going through Lambda
              School back in 2019, coming from Law School it was a huge shift in the experience of
              learning and I have been a big advocate for CBC since then (running one myself last
              year).
            </p>

            <p>
              I first learned about Maven when I read{' '}
              <a href="https://techcrunch.com/2020/11/12/udemy-and-altmba-co-founders-return-to-edtech-with-a-new-stealthy-business/ ">
                this TechCrunch article
              </a>{' '}
              that came out last November. I instantly knew this was what I was looking for, so I
              took the initiative to send an application email to Gagan to see if I could be of help
              and he pointed out they were only looking for a Founding Engineer at the time and that
              I should check back later, so here I am.
            </p>
            <p>
              Now that you are hiring more aggressively I checked your careers page and thought I
              could be a great fit for the White-glove Course lead role.
            </p>
            <div
              style={{
                fontWeight: 600,
                paddingTop: '20px',
                paddingBottom: '10px',
              }}
            >
              Why would I be a great candidate for Maven?
            </div>
            <p>
              I have a wide range of skills, being a Software Engineer (Full-Stack), Lawyer, and
              former online poker pro, I have acquired a unique mix of soft and technical skills,
              with a very rational and probabilistic oriented approach to decisions while still
              being very good with people.
            </p>
            <p>
              You guys have done a great job promoting Maven with this popular creators in this
              first phase, but eventually, do it for you courses, volume-wise, might be the rarest
              format probably, so in the event of some downtime I think you will find my Software
              Engineering skills quite useful to optimize resources.
            </p>

            <p>
              The same for prototyping new product ideas or building White-glove facing software.
            </p>
            <div
              style={{
                fontWeight: 600,
                paddingTop: '20px',
                paddingBottom: '10px',
              }}
            >
              Doing my job.
            </div>
            <p>
              I heard somewhere that the best way to get a job is to be doing it before you even get
              it, so, I started contacting Maven's VIP creators to see how we could help them have a
              better experience and receive their overall feedback.
            </p>
            <p>
              I got answers from 50% of them (not bad for not having the job, yet), with some
              feedback you might find valuable, so I share it here and will analyze a bit what they
              had to say.
            </p>
            <p style={{ fontWeight: 600, marginTop: '30px', marginBottom: '5px' }}>Lenny</p>
            <Img src={lenny} />
            <p style={{ fontWeight: 600, marginTop: '30px', marginBottom: '5px' }}>Greg</p>
            <Img src={greg} />
            <p style={{ fontWeight: 600, marginTop: '30px', marginBottom: '5px' }}>Sahil</p>
            <Img src={sahil} />
            <div
              style={{
                fontWeight: 600,
                paddingTop: '20px',
                paddingBottom: '10px',
              }}
            >
              Templates and structure
            </div>
            <p>
              Maven is still in its early days, so it is to be expected that the structure that
              would fully facilitate saving time while building a course is not entirely in place,
              but this was the most common feedback.
            </p>
            <p>
              I am sure this is something thats already on your mind, but I would love to help to
              prototype some parts of the product and see what you are thinking in regards to this.
            </p>
            <div
              style={{
                fontWeight: 600,
                paddingTop: '20px',
                paddingBottom: '10px',
              }}
            >
              Frameworks and best practices
            </div>
            <p>
              Seems like something that creators felt was lacking was some kind of guidance in terms
              of best practices or frameworks for building their courses.
            </p>
            <p>
              I know that Lenny, because we kept talking, didn’t go through Wes's 6-week intro
              course, so that probably could have made things different, but of course, this VIPs
              won’t have the time to go through it mostly, so there is some potential to build
              guides, documentation or other kind of artifacts that would serve as as backup for
              them while creating the courses.
            </p>
            <div
              style={{
                fontWeight: 600,
                paddingTop: '20px',
                paddingBottom: '10px',
              }}
            >
              Community
            </div>
            <p>
              Greg specifically touched on the subject of community and upon further conversation,
              he told me he would love to have some way to connect deeper with students, both while
              running the course and after it's done, so maybe some kind of fellowship could be a
              good idea to implement.
            </p>
            <p>
              This is, of course, a very hard problem to solve and one that many are trying to
              figure out, but we could explore some possibilities here, I would love to know what
              you guys have in mind for this, or if you think that maybe it just falls out of the
              scope for Maven.
            </p>
            <p>
              I didn't stop there and I also contacted some students that had gone through Maven
              courses and gathered some feedback as well.
            </p>
            <p>
              In general, the main thing they had to say was that they felt there wasn’t much
              student-facing software built yet (again, early stages).
            </p>
            <p>
              {' '}
              They do think, mostly, that group discussions were great, but that the feedback for
              assignments was lacking, and that was what they were the most interested about,
              getting feedback from the Creators that they admire (this last part was specifically
              regarding Li Jin's course).
            </p>
            <p>
              Of course, the time of this creators is quite valuable and you can’t realistically
              expect them to sit through the assignments of every student, but I think there might
              be potential here to explore some fixed setups where students play different roles in
              group assignments and have software that will help creators go through the projects in
              an efficient way and give feedback without using too much time.
            </p>
            <p>
              I also have a conversation pending with David Zelniker, who was the Course Designer
              for Greg Isenberg, he surely has a lot of valuable insight to share regarding the
              experience of building a Maven CBC, so I am looking forward to that. I just didnt want
              to wait so much to contact you guys because I figured a lot of people are going to be
              applying.
            </p>
            <p>
              I also took time to approach certain creators with considerable audiencies to see if
              they would be interested in creating courses at Maven, I managed to get Arvid Kahl
              <a href="https://twitter.com/arvidkahl"> @arvidkahl</a> interested, he just launched
              his second book this week and has a passionate following and a lot of valuable content
              to share with the world.
            </p>
            <p>
              There are many cool courses waiting to be created, and so many things to experiment
              with at Maven, I cant think of a better place to be working right now.
            </p>
            <p>
              If there is any other role you have in mind that I could be a fit for, other than
              Engineering, which Im open to discussing too, I would love to know.{' '}
            </p>
            <p>Hope to talk to you soon.</p>
            <p>Best,</p>
            <p>Jose</p>
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

export default Maven;
