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


    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const Cuerpo = styled.div`
        margin: 0 auto;
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
        line-height: 1.6rem;
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
        line-height: 1.6rem;
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
        height: 30px;
        margin-top: 20px;
        border-radius: 5px;
        &:hover: {cursor: pointer}
    `

    const Titulo = styled.div`
    font-size: 3.2rem;
    width: 90%;
    margin-top: 20px;
    padding-left: 20px;
    
    @media ${device.tablet}{
        font-size: 2.8rem;
        
      }
      @media ${device.mobileM}{
        font-size: 2.2rem;
        text-align: center;
      }
      
`



      
    return(
        <Cuerpo>
            <Titulo className="titulo">Hola, soy Jose</Titulo>
               <Topleft>
                    <Presentacion className="about_me"> 
                       
                            <p css={{ marginRight: 24}}>Soy desarrollador de software, abogado y previamente jugador profesional de poker. <br/><br/>
                                
                               En este sitio escribo sobre las cosas que encuentro interesantes y me entretienen, 
                                        como tecnologia, herramientas de 
                                    productividad, startups, programacion, ciencias, etc.
                                </p>
                             </Presentacion>
                   
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
                        
                <form onSumbit={handleSubmit} css={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start', width: '90%', paddingLeft: 20}}>
                     <input type='text' placeholder="   Tu mejor email..." css={{width: '55%', borderRadius: 5, height: 23, border: '1px solid darkgrey', 
                     fontFamily: 'Merriweather', marginRight: '3%', 
                     padding: 8, paddingLeft: 15, textAlign: 'left'}}/>
                     <button css={{ color: 'white', background: '#e89049', height: 40, minWidth: 100, fontWeight: 600, letterSpacing: 0.5,
                     border: 'none', borderRadius: 5, '&:hover': {cursor: 'pointer', background: '#dc7727', transitionDuration: '1s'}}}>
                         Suscribete!</button>
            </form>
            <div css={{display:'flex', flexDirection: 'row', alignItems: 'center', width: '40%' }}>
                <div css={{width: '70%', 
                           marginTop: 30, 
                           fontSize: '1.2rem',
                           fontWeight: 500,
                           lineHeight: '1.6rem',
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


