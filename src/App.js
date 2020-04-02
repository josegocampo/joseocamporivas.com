/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react';
import './App.css';



function App() {

const [color, setColor] = useState('white')

const sides = css({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  paddingTop: 40,
  width: 800,
  paddingLeft: 40
})

const buttons = css({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  zIndex: 1,
  height: 66,
  marginTop: 20,
  width: 70
})

const green = css({
  color: 'rgba(18,18,18,.87)',
  background: '#c3ffc1c2',
})

const black = css({
  color: 'white',
  background: 'black',
})

const sepia = css({
  color: 'rgba(18,18,18,.87)',
  background: '#ffe8be',
})

const white = css({
  color: 'rgba(18,18,18,.87)',
  background: 'white',
})

const none = css({
  display: 'none'
})


const handleGreen = e =>{
  setColor('green')
}

const handleBlack = e =>{
  setColor('black')
}

const handleSepia = e =>{
  setColor('sepia')
}

const handleWhite = e =>{
  setColor('white')
}


let colorMode;

  if (color === 'white'){
    colorMode = white
  }
  else if (color === 'green'){
    colorMode = green
  }
  else if (color === 'black'){
    colorMode = black
  }
  else if (color === 'sepia'){
    colorMode = sepia
  }

let noneWhite;
let noneGreen;
let noneBlack;
let noneSepia;

if (color === 'white'){
  noneWhite = none
}
else if (color === 'green'){
  noneGreen = none
}
else if (color === 'black'){
  noneBlack = none
}
else if (color === 'sepia'){
  noneSepia = none
}



  return (
<div className="App" css={colorMode}>

  <div className ="left-right" css={sides}>
    
        <div css={buttons}>
          {color === 'white'? <div css={noneWhite}/> : <div className="color-mode" onClick={handleWhite} css={white} ><div></div></div>}
          {color === 'green'? <div css={noneGreen}/> : <div className="color-mode" onClick={handleGreen} css={green} ><div></div></div>}
          {color === 'black'? <div css={noneBlack}/> : <div className="color-mode" onClick={handleBlack} css={black} ><div></div></div>}
          {color === 'sepia'? <div css={noneSepia}/> : <div className="color-mode" onClick={handleSepia} css={sepia} ><div></div></div>}
        </div>
        
  
                  
            <div className="text" css={{
                  margin: '0 auto',
                  fontSize: 14,
                  lineHeight: 1.7,
                  width: '72%',
                  fontWeight: 300,
                  marginLeft: '10%',
                  hpyens: 'auto',
                  letterSpacing: 0.3
                 }}>

              <h1>TITULO DEL TEXTO</h1>

              Hola, me llamo Jose, soy programador y abogado, ex jugador profesional de poker, si, en serio.<br/><br/>
              Me encanta escribir, hacer deportes, investigar, las probabilidades, solucionar problemas de lógica.<br/><br/>
              Actualmente estoy centrado en investigar como crear un sistema de manejo del conocimiento que permita ser mas productivo.
              En programación las herramientas y lenguajes que ocupo con mas frecuencia son JavaScript, React, Redux, Node, Express, SQL. 
              
              
              
              Playfair Display  
              Slabo 27px  
              EB Garamond 
              Cormorant Garamond //needs to be a bit bolder
              Tinos
              Cardo

              <br/><br/>
              Hola, me llamo Jose, soy programador y abogado, ex jugador profesional de poker, si, en serio.<br/><br/>
              Me encanta escribir, hacer deportes, investigar, las probabilidades, solucionar problemas de lógica.<br/><br/>
              Actualmente estoy centrado en investigar como crear un sistema de manejo del conocimiento que permita ser mas productivo.
              En programación las herramientas y lenguajes que ocupo con mas frecuencia son JavaScript, React, Redux, Node, Express, SQL. 
              
              
              
              Playfair Display  
              Slabo 27px  
              EB Garamond 
              Cormorant Garamond //needs to be a bit bolder
              Tinos
              Cardo

              <br/><br/>
              Hola, me llamo Jose, soy programador y abogado, ex jugador profesional de poker, si, en serio.<br/><br/>
              Me encanta escribir, hacer deportes, investigar, las probabilidades, solucionar problemas de lógica.<br/><br/>
              Actualmente estoy centrado en investigar como crear un sistema de manejo del conocimiento que permita ser mas productivo.
              En programación las herramientas y lenguajes que ocupo con mas frecuencia son JavaScript, React, Redux, Node, Express, SQL. 
              
              
              
              Playfair Display  
              Slabo 27px  
              EB Garamond 
              Cormorant Garamond //needs to be a bit bolder
              Tinos
              Cardo
              
        
    
  </div>
  
  </div>
  
  </div>
  
    
      

  );
}

export default App;



