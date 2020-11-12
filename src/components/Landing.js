/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'
import styled from "styled-components";
import Mailchimp from 'react-mailchimp-form'
import Typing from 'react-typing-animation';
import { Link } from "react-router-dom";
import {device} from './utils/MQs'
import '../App.css';
import twitter from '../images/twitter3.png' 
import talk from '../images/github2.png' 
import yt from '../images/linkedin3.png' 
import yoback from '../images/yoback.png';


function Landing(){

const [subscribed, setSubscribed] = useState(false)

    const handleSubmit = (e) =>{
        setSubscribed(true)
        e.preventDefault()
    }
    const Cuerpo = styled.div`
        margin: 0 auto;
        margin-top: 10px;
        display: flex,
        flex-direction: column;
        max-width: 700px;
        align-items: flex-start;
    
        @media ${device.mobileS}{
            max-width: 320px;
        }
    `

    const Topleft = styled.div`
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        text-align: left;
        align-items: center;
        justify-content: space-around;
        @media ${device.mobileL}{
            flex-direction: column-reverse;
            align-items: flex-start;
          }
      `

    const Presentacion = styled.div`
        color: #333;
        margin: 0 auto;
        flex-direction: column;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.7rem;
        display: flex;
        align-items: center;
        width: 66%;
        display: flex;
        flex-direction: column;
        text-align: left;
        justify-content : flex-end;
        padding-left: 20px;
        @media ${device.mobileL}{
            width: 90%;
          }

      `

      const Presentacion2 = styled.div`
        color: #333;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.7rem;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 20px;
        width: 91%;
        margin-top: 5px;
        @media ${device.mobileL}{
            width: 90%;
            padding-left: 30px;
          }
      `


    const Images = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 33%;
        margin-right: 20px;
     
        @media ${device.mobileL}{
            width: 150px;
            margin: 0 auto;
            margin-top: 15px;
          }
    `

    const Img = styled.img`
        border-radius: 50%;
        width: 200px;
        @media ${device.tablet}{
            width: 150px;
            
          }
    `

    const Icons = styled.div`
        margin: 0 auto;
        width: 140px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        marginLeft: 275px;
        margin-top: 10px;
       
    `
    
    const Icon = styled.img`
        width: 30px;
        margin-top: 20px;
        &:hover {cursor: pointer};

    `

    const Titulo = styled.div`
    font-size: 4rem;
    width: 90%;
    padding-left: 20px;
    color: #3c3c3c;
    
    @media ${device.tablet}{
        font-size: 2.8rem;
        margin-top:10px;
        
      }
      @media ${device.mobileL}{
        margin-top: 30px;
        text-align: center;
      }
      
`



      
    return(
        <Cuerpo>
            <Titulo className="titulo">Hi, I'm Jose</Titulo>
               <Topleft>
                    <Presentacion className="about_me"> 
                       
                            <p>I am a software engineer, lawyer and former online poker pro player.<br/><br/>
                                
                               I love researching new things, writing about them and sharing those findings with other people.<br/><br/>

                               Lately I am most interested in the future of work and education, programming, pizzas, old rome and greece, probabilistic thinking, 
                               japanese culture in general, and many other topics.
                                </p>
                             </Presentacion>
                   
                    <Images>
                        <Img img src={yoback}/>
                       
                    </Images>
                </Topleft>
                <Presentacion2 className="about_me">
                                <div css={{ height: '50%'}}>
                                    If you are also a curious person and you would like to hear about this subjects, you can join our small community of 150+ people
                                    that are receiving my newsletter.<br/><br/>
                                
                                
                              I send one short email every two weeks with the things I've found the most interesting and could be useful for you.</div><br/>
                            </Presentacion2>

            
                <form  action={process.env.REACT_APP_MAILCHIMP_URL} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"
                         novalidate css={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start', width: '90%', paddingLeft: 20, alignItems: 'center'}}>
                     <input type='email' name="EMAIL" placeholder="Your favorite email :)" css={{width: '55%', borderRadius: 5, height: 23, border: '1px solid darkgrey', 
                     fontFamily: 'Merriweather', marginRight: '3%', 
                     padding: 8, paddingLeft: 15, textAlign: 'left', fontSize: '0.9rem'}}/>
                     <button css={{ color: 'white', background: '#e89049', height: 60, minWidth: 200, fontWeight: 600, fontSize: '1rem', letterSpacing: 0.5,
                     border: 'none', borderRadius: 5, '&:hover': {cursor: 'pointer', background: '#dc7727', transitionDuration: '1s'}}}>
                         Send me that fun info!</button>
            </form> 
            <div css={{display:'flex', flexDirection: 'row', alignItems: 'center', width: '40%' }}>
                <div css={{width: '70%', 
                           marginTop: 30, 
                           fontSize: '1.2rem',
                           fontWeight: 500,
                           lineHeight: '1.6rem',
                           letterSpacing: 1,
                           paddingLeft: 30
            }} className="about_me">Hope you enjoy,<br/><br/>

                Jose </div>
            </div>
            <Icons>

                                <a href="https://twitter.com/josegocampo"><Icon src={twitter}/></a>
                                <a href="https://www.linkedin.com/in/joseocampo/?locale=en_US"><Icon src={yt}/></a>
                                <a href="https://github.com/josegocampo"><Icon src={talk}/></a>
                           </Icons> 

                           <div css={{margin: '0 auto', width: '100%', color: '#aaa', borderTop: '1px solid #aaa', marginTop: 61, 
            textAlign: 'center', fontSize: '0.7rem', paddingTop: 20}}>© Jose Ocampo, 2020 | Everything done by this two hands</div>
            
       
{/* <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} /> */}
        </Cuerpo>
        
    )
}


export default Landing;


