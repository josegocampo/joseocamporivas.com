/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from "react";
import styled from "styled-components";
import '../App.css';
import { device } from './utils/MQs'


const About = () => {


  return (
  
   <div>
        
         <Sides>
         <Tutto className="about">
              <p>
                My name is Jose Ocampo, I am from Chile. I am a Full Stack Software Developer, a Lawyer and a former Online Poker Pro Player.
              </p>
            
              <p>
                I am looking to participate in proyects that: 
                <ol>
                 
                <li>Are interesting to me. - subjective, but maybe you can get an idea for what this means after browswing trough my site a bit-</li> 
                <li>Look to improve the quality of life of a large group of people.</li>
                 <li>Usually proyects that are in the early to mid early stages, love being involved with the development of things..</li> 
                 <li>Incentive curiosity and are opportunities to learn.</li> 
                 <li>Value to participants involved and reward them appropiately to their contributions.</li>

                  </ol>
              </p>

              <p>Programming is what allows me to come the closest and with most efficiency to those purposes, so that is the main tool I use today, 
                but that is only one side of me, I am also a trained lawyer, a probabilistic thinker, good at design and drawing, I think of myself more as a 
                Full Stack problem solver and like to be involved in many different areas.
                 </p>

                 <p>I guess that is why I have a preference for Startups and early stage projects usually, because I can use my full range of skills 
                   and take advantage of my creativity to the fullest.
                 </p>


              <p>My main hobbies are reading, playing sports (golf, soccer, tennis), building apps, cooking, and spending time with friends and family.</p>


              <p>
                My email is joseor@hey.com. I love reading from people all over the internet and even if It might take some time I respond to every single email, 
                would love to hear about you and what you are doing. 
              </p>



           
  
              
               <div css={{margin: '0 auto', width: '100%', color: '#aaa', borderTop: '1px solid #aaa', marginTop: 61, 
              textAlign: 'center', fontSize: '0.7rem', paddingTop: 20, paddingBottom: 40  }}>© Jose Ocampo, 2020 | Todo hecho a mano</div>
                  </Tutto>
         </Sides>
  
   </div>
                
         

  );
};

export default About;

const Tutto = styled.div`
    margin: 0 auto;
  

    `
    const Sides = styled.div`
    margin: 0 auto;
    max-width: 683px;
    padding-left: 5px;
    margin-top: 40px;
    @media ${device.tablet}{
      max-width: 628px;
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
   const Titulo = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.5rem;


    @media ${device.tablet}{
      font-size: 2.9rem;

      }
      @media ${device.mobileL}{
        max-width: 380px;
        font-size: 2.5rem;
        line-height: 3rem;
    }
    @media ${device.mobileM}{
      width: 340px;
      font-size: 2.2rem;
      line-height: 2.8rem;

    }
    @media ${device.mobileS}{
      max-width: 330px;

}
@media ${device.mobileXS}{
  max-width: 300px;

}
    `

  const Youtube = styled.iframe`
  @media ${device.tablet}{
    max-width: 600px;
    
    }
    
  @media ${device.tabletS}{
    max-width: 490px;
   
    }
    @media ${device.mobileL}{
      max-width: 380px;
     }
  @media ${device.mobileM}{
     width: 340px;

  }
  @media ${device.mobileS}{
      max-width: 330px;

}
@media ${device.mobileXS}{
max-width: 290px;

}
  `
  