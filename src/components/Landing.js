/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import styled from "styled-components";
import Typing from 'react-typing-animation';
import { Link } from "react-router-dom";
import {device} from './utils/MQs'
import '../App.css';
import twitter from '../images/twitter.png' 
import talk from '../images/talk.png' 
import yt from '../images/yt.png' 
import yoback from '../images/yoback.png';

function Landing(){

    const Cuerpo = styled.div`
        margin: 0 auto;
        display: flex,
        flex-direction: column;
        max-width: 730px;
        align-items: flex-start;

        @media ${device.mobileS}{
            max-width: 320px;
            background: red;
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
        color: rgb(84, 89, 119);
        margin: 0 auto;
        flex-direction: column;
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.4rem;
        letter-spacing: 1.1px;
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
        color: rgb(84, 89, 119);
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.5rem;
        letter-spacing: 1.1px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 20px;
        width: 71%;
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
        @media ${device.mobileL}{
            width: 150px;
            margin: 0 auto;
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
        border-radius: 5px;
        &:hover: {cursor: pointer}
    `

    const Titulo = styled.div`
    font-size: 2.8rem;
    width: 90%;
    margin-top: 20px;
    padding-left: 20px;
    
    @media ${device.tablet}{
        font-size: 2.8rem;
        
      }
      @media ${device.mobileM}{
        font-size: 2.2rem;
      }
      
`



      
    return(
        <Cuerpo>
            <Titulo>Hola, soy Jose</Titulo>
               <Topleft>
                    <Presentacion className="about_me"> 
                       
                            <p css={{ marginRight: 24}}>Soy desarrollador de software, abogado y previamente jugador profesional de poker. <br/><br/>
                                
                               En este sitio escribo sobre las cosas que encuentro interesantes y me entretienen, 
                                        como tecnologia, herramientas de 
                                    productividad, startups, programacion, ciencias, etc.
                                </p>
                             </Presentacion>
{/* 
                            Paso gran parte del tiempo investigando estos temas y practicando con herramientas relacionadas a ellos, puedes seguirme en twitter ya que la
                            mayoría del tiempo comparto lo que estoy haciendo. */}

                            
                        {/* <Typing>
                            <span> Soy Jose Ocampo,</span><Typing.Delay ms={500} /><span>software developer</span> <Typing.Backspace count={19} />
                            <Typing.Delay ms={1000} /><span> programador<Typing.Delay ms={200} />, abogado, jugador de <Typing.Backspace count={12} /> ex jugador de poker,<Typing.Delay ms={200} />
                            <Typing.Delay ms={200} /> intento de pixel artist, etc.</span><br/><br/><span>Gracias por visitar!<br/><br/> Si no sabes que ver, haz click en el dado >>> 
                            <img src={verde} className="dado"/> 
                            </span>
                        </Typing> */}
                   
                    <Images>
                        <Img img src={yoback}/>
                       
                    </Images>
                </Topleft>
                <Presentacion2 className="about_me">
                                <div css={{ height: '50%'}}>
                                    Si eres una persona curiosa y te interesan estos temas, deberias suscribirte a las ya
                                    mas de 100 personas en mi <Link to="/newsletter" css={{textDecoration: 'none', color: 'rgb(0, 175, 240)', '&:hover': {color: '#e89049'}}}>
                                    newsletter</Link> "Nombre de Newsletter".<br/><br/>
                                
                                
                              Es un email a la semana en el que comparto información sobre las cosas que descubro, pienso y me entretienen semana a semana</div><br/>
                            </Presentacion2>
                        
                <div css={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start', width: '90%', paddingLeft: 20}}>
                     <input type='text' placeholder="   Tu mejor email..." css={{width: '55%', borderRadius: 5, height: 23, border: '1px solid darkgrey', 
                     fontFamily: 'Merriweather', marginRight: '3%', 
                     padding: 8, paddingLeft: 15, textAlign: 'left'}}/>
                     <button css={{ color: 'white', background: '#e89049', height: 40, minWidth: 100, fontFamily: 'Merriweather', fontWeight: 600, letterSpacing: 1.3,
                     border: 'none', borderRadius: 5, '&:hover': {cursor: 'pointer', background: '#dc7727', transitionDuration: '1s'}}}>
                         Suscribete!</button>
            </div>
            <div css={{display:'flex', flexDirection: 'row', alignItems: 'center', width: '40%' }}>
                <div css={{width: '70%', 
                           marginTop: 30, 
                           fontSize: '0.9rem',
                           fontWeight: 500,
                           lineHeight: '2rem',
                           letterSpacing: 1,
                           paddingLeft: 30
            }} className="about_me">Espero lo disfruten,<br/>
                Jose </div>
            </div>
            <Icons>
                                <Icon src={twitter}/>
                                <Icon src={yt}/>
                                <Icon src={talk}/>
                           </Icons>

                           <div css={{margin: '0 auto', width: '100%', color: '#aaa', borderTop: '1px solid #aaa', marginTop: 61, 
            textAlign: 'center', fontSize: '0.7rem', paddingTop: 20}}>© Jose Ocampo, 2020 | Todo hecho a mano</div>

        </Cuerpo>
        
    )
}


export default Landing;

