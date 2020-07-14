/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import '../App.css';
import newme from '../images/newme.png';
import Typing from 'react-typing-animation';
import verde from '../images/green.png'
 


function Landing(){

    const cuerpo = css({
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        width: 800,
      })

    const top = css({
        display: 'flex',
        flexDirection: 'row',
        height: 300,
        paddingTop: 50
    })

    const topleft = css({
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        width: '60%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 40,
        textAlign: 'left'
      })

    const img = css({
        width: 150
    })

    const presentacion = css({
        margin: '0 auto',
        flexDirection: 'column',
        marginLeft: 10,
        fontSize: '0.55rem',
        fontWeight: 0,
        lineHeight: '1.4rem',
        letterSpacing: 2,
        display: 'flex',
        alignItems: 'center'
        
        
      })

    const topright = css({
        width: '33%',
        paddingLeft: 40,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        fontSize: '0.7rem'

    })

    const middle = css({
        paddingTop: 100,
        display: 'flex',
        flexDirection: 'column',
    })

   

      
    return(
        <div css={cuerpo} className="land">
           <div css={top}>
               <div css={topleft}><img src={newme} css={img}/><div css={presentacion} className="about_me">        <Typing>
    <span>Hola!<Typing.Delay ms={1000} /><br/><br/> Soy Jose Ocampo,</span><Typing.Delay ms={500} /><span>software developer</span> <Typing.Backspace count={19} /><Typing.Delay ms={1000} /><span> programador<Typing.Delay ms={200} />, abogado, jugador de <Typing.Backspace count={12} /> ex jugador de poker,<Typing.Delay ms={200} /><Typing.Delay ms={200} /> intento de pixel artist, etc.</span><br/><br/><span>Gracias por visitar!<br/><br/> Si no sabes que ver, haz click en el dado >>> <img src={verde} className="dado"/> </span>
 
  </Typing>
                  </div></div>
               <div css={topright}><h1>Ultimos Ensayos</h1>
               <div><h2>Ensayo sobre una cosa</h2>
               Este ensayo trata sobre tal cosa, importantisima como tu sabras porque si.</div>
               <div><h2>Ensayo sobre otra cosa</h2>
               Este ensayo trata sobre tal cosa, importantisima como tu sabras porque si.</div>
               <div><h2>Ensayo sobre otra cosa mas</h2>
               Este ensayo trata sobre tal cosa, importantisima como tu sabras porque si.</div>
           </div>
        </div>
         <div css={middle}>
             <h1>Esta es la mitad de la pagina</h1>
             <h2>Aca va mas info importante</h2>
         </div>
        </div>
        
    )
}


export default Landing;