/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import '../App.css';
import newme from '../images/newme.png';
import Typing from 'react-typing-animation';
 


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
        height: 200,
    })

    const topleft = css({
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        width: '60%',
        alignItems: 'center',
        paddingRight: 20,
        paddingTop: 30
       
      })

    const img = css({
        width: 150
    })

    const presentacion = css({
        margin: '0 auto',
        flexDirection: 'column',
        marginLeft: 10,
        fontSize: '0.9rem',
        fontWeight: 500
      })

    const topright = css({
        width: '40%',
        paddingTop: 30
    })

   

      
    return(
        <div css={cuerpo}>
           <div css={top}>
               <div css={topleft}><img src={newme} css={img}/><div css={presentacion}>        <Typing>
    <span>Hola, soy Jose Ocampo, programador, jugador de poker, abogado, intento de pixel artist, etc.</span>
 
  </Typing>
                  </div></div>
               <div css={topright}>blabla</div>
           </div>
        </div>
        
    )
}


export default Landing;