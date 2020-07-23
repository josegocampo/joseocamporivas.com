/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import '../App.css';
import yoback from '../images/yoback.png';
import Typing from 'react-typing-animation';
import verde from '../images/green.png'
import twitter from '../images/twitter.png' 
import talk from '../images/talk.png' 
import yt from '../images/yt.png' 

function Landing(){

    const cuerpo = css({
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        width: 650,
        alignItems: 'flex-start',
        paddingLeft: 10
      })


    const topleft = css({
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'left',
        justifyContent: 'space-between',
        paddingTop: 25
      })

    const presentacion = css({
        margin: '0 auto',
        flexDirection: 'column',
        fontSize: '0.9rem',
        fontWeight: 500,
        lineHeight: '1.2rem',
        letterSpacing: 1,
        display: 'flex',
        alignItems: 'center',
        marginRight: 20,
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        justifyContent : 'flex-start',
      })

    const images = css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '36%',
        marginTop: 50,
        marginRight: 50
    })

    const img = css({
        borderRadius: '50%',
        width: 200,
    })

    const icons = css({
        margin: '0 auto',
        width: 140,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 275,
        marginTop: 130
       
    })
    
    const icon = css({
        width: 30,
        marginTop: 20,
        borderRadius: 5,
        '&:hover': {cursor: 'pointer'}
    })

    

      
    return(
        <div css={cuerpo} className="land">
       
               <div css={topleft}>
                    <div css={presentacion} className="about_me"> 
                        <h1 css={{fontSize: '3.5rem', width: '100%', }} className="about_me">Hola!</h1><br/>
                        
                            Soy Jose Ocampo, software developer, abogado, ex jugador de poker,
                            intento de pixel artist, etc.<br/><br/>
                            
                            Me encanta escribir, y siempre estoy encontrando cosas nuevas en tecnologia, ya sea software, nuevos descubrimientos y tambien otros temas.<br/><br/>
                            
                            Si quieres unirte a una comunidad de mas de 150 personas que reciben actualizaciones cada dos semanas sobre estos temas y mas, entonces no dudes en suscribirte a mi newsletter.<br/><br/>
                           
                            
                        {/* <Typing>
                            <span> Soy Jose Ocampo,</span><Typing.Delay ms={500} /><span>software developer</span> <Typing.Backspace count={19} />
                            <Typing.Delay ms={1000} /><span> programador<Typing.Delay ms={200} />, abogado, jugador de <Typing.Backspace count={12} /> ex jugador de poker,<Typing.Delay ms={200} />
                            <Typing.Delay ms={200} /> intento de pixel artist, etc.</span><br/><br/><span>Gracias por visitar!<br/><br/> Si no sabes que ver, haz click en el dado >>> 
                            <img src={verde} className="dado"/> 
                            </span>
                        </Typing> */}
                    </div>
                    <div css={images}>
                        <img src={yoback} css={img}/>
                       
                    </div>
                </div>
                        
                <div css={{marginTop: 50, display: 'flex', flexDirection: 'row', justifyContent:'flex-start', width: '90%'}}>
                     <input type='text' placeholder="   Tu mejor email..." css={{width: '50%', borderRadius: 5, height: 23, border: '1px solid darkgrey', marginRight: '7%', padding: 8, paddingLeft: 15, textAlign: 'left'}}/><button css={{textDecoration: 'none', color: 'white', background: '#637abb', height: 40, width: '25%', border: 'none', borderRadius: 5, '&:hover': {cursor: 'pointer'}}}>Suscribete!</button>
            </div>
            <div css={{display:'flex', flexDirection: 'row', alignItems: 'center', width: '40%' }}>
                <div css={{width: '50%', 
                           marginTop: 20, 
                           fontSize: '0.9rem',
                           fontWeight: 500,
                           lineHeight: '1.8rem',
                           letterSpacing: 1,
            }} className="about_me">Disfruta,<br/>
                Jose </div>
            </div>
            <div css={icons}>
                                <img src={twitter} css={icon}/>
                                <img src={yt} css={icon}/>
                                <img src={talk} css={icon}/>
                           </div>

            <div css={{margin: '0 auto', width: '100%', color: '#aaa', borderTop: '1px solid #aaa', marginTop: 60, textAlign: 'center', fontSize: '0.7rem', paddingTop: 20 }}>© Jose Ocampo, 2020 | Todo hecho a mano</div>

        </div>
        
    )
}


export default Landing;