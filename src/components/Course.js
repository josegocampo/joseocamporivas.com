/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from "react";
import styled from "styled-components";
import wip from  '../images/wip.png'
import '../App.css';
import { device } from './utils/MQs'


const Course = () => {


  return (
  
   <div>
        <Tutto className="essay">
         <Sides>
         <Titulo className="titulo">Curso Introducción al Desarrollo Web</Titulo>
            <span style={{color: 'grey', fontSize: '1rem'}}>7 de Agosto - 9 Octubre  [2020]</span>
            
            <p>Curso gratuito, 10 clases en vivo de 2 horas cada una, 1 vez a la semana, por Zoom, link mas abajo.</p>
  
            <p> Creo que como ciudadanos del mundo todos tenemos la responsabilidad de poner nuestro granito de arena para lograr el futuro que queremos construir.</p>
  
            <p>
                En mi caso, me encantaría ver una Latinoamérica desarrollada, donde florezca la tecnología e ideemos productos que ayuden a mejorar la calidad de vida 
                 de nuestros habitantes, a la vez creando empleos e industria tecnológica.
  
            </p>  
  
  
  <Youtube width="560" height="315" src="https://www.youtube.com/embed/QQq7_7ZHQhU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Youtube>
  
  <p style={{color: 'grey', fontSize: '1rem', marginTop: 10, marginBottom: 10}}>Ejemplo de los videos con materiales de preparación que envio a los alumnos antes de las clases</p>
  
    
             <p>
                Creo que es ese es uno de los caminos para lograr que la región alcance su potencial, disminuir la pobreza, ayudar a que exista más meritocracia y no tanto
                amiguismo y elitismo.</p>
                
                <p> La programación tiene esa gracia, es un area en que lo único que vale es que tan bueno eres para desempeñarte en dicha tarea, es una de 
                las areas con mayor meritocracia que conozco. </p>
                
                <p>A la vez, sabiendo programar puedes crear todo tipo de herramientas y soluciones con software, siendo el 
                limite solamente tu imaginación.
             </p>
  
              <p>
                Por lo mismo, para practicar lo que predico y para avanzar hacia este objetivo estoy dictando un curso de Introducción al Desarrollo Web, gratis, en el cual se inscribieron 
                mas de 160 personas de toda latinoamerica.
  
              </p>  
              <p>
                Las clases se desarrollan de manera presencial por Zoom los dias Viernes. Actualmente vamos en la tercera clase de este grupo.
  
              </p>  
             <p>
                Partimos por ver que es el Desarrollo Web, los lenguajes base de la web, HTML y CSS, y luego introducirnos con mayor profundidad en ellos, desde que es un elemento de HTML hasta
                aprender a usar <a href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Conceptos_Basicos_de_Flexbox">flexbox</a> y <a href='https://developer.mozilla.org/es/docs/CSS/Media_queries'>media queries</a> con CSS, para 
                terminar aprendiendo JavaScript como lenguaje funcional.  
             </p>
  
             <p> Si te interesa tener mas información, recibir los mails de las clases, inscribete en este <a href="https://joseocamporivas.typeform.com/to/rRzZsg">formulario.</a></p>
  
              
               <div css={{margin: '0 auto', width: '100%', color: '#aaa', borderTop: '1px solid #aaa', marginTop: 61, 
              textAlign: 'center', fontSize: '0.7rem', paddingTop: 20, paddingBottom: 40  }}>© Jose Ocampo, 2020 | Todo hecho a mano</div>
         </Sides>
        </Tutto>
   </div>
                
         

  );
};

export default Course;

const Tutto = styled.div`
    margin: 0 auto;


    `
    const Sides = styled.div`
    margin: 0 auto;
    max-width: 730px;
    padding-left: 5px;
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
  