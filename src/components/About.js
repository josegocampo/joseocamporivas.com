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
              <p>Me llamo José Ocampo. Soy un desarrollador de software y abogado, ex jugador de poker, que vive en Santiago de Chile y trabaja en el Internet. </p>
              <p>Mi email es joseor@hey.com, leo todos los correos que me llegan y trato de contestar la mayoría, si quieres conversar sobre algún tema en particular o solo saludar
                 me encantaría escuchar de ti. 
              </p>
                <p>
                   Soy un optimista por elección. Me interesa y creo que debemos apuntar a mejorar la vida de las personas y me entretiene trabajar en problemas complejos que
                   busquen dicho objetivo. 
                </p>
              <p>
                Busco participar en proyectos que: 
                <ol>
                 
                <li>Sean interesantes —subjetivo—.</li> 
                <li>Busquen mejorar la calidad de vida de un gran grupo de gente.</li>
                 <li>Tengan oportunidades de mentoreo y un equipo al que pueda admirar.</li> 
                 <li>Incentiven la curiosidad de los involucrados.</li> 
                 <li>Valoren sus aportes reumerandolos apropiadamente.</li>

                  </ol>
              </p>

              <p>La programación, hoy en día, es la herramienta que mejor me permite acercarme a esos propósitos, por lo tanto
                 es la que que ocupo para desempeñarme, pero no define quien soy, ni tampoco mis posibilidades, me adapto en base a 
                 lo que se requiera en cada situación en particular.</p>

                <p>
                 Estudié Desarrollo Web en Lambda School, empresa de YCombinator que lideró la vanguardia en enseñanza online -antes de que fuese la norma 
                 por la situación global actual-. Lambda es la mezcla perfecta entre Bootcamp de programación y carrera universitaria 
                de Computer Science, con una duración de casi dos años. El stack tecnológico con que actualmente me siento mas comodo es:</p>


              <p>El stack tecnológico con que actualmente me siento mas comodo es:</p>
              
             <ul>
                <li>Front: JS, React, Redux, Styled Components, CSS, LESS HTML5</li>
  
                <li>Back: Node, Express, Knex, SQL, REST APIs, Relational Databases</li>
             </ul>

              <p>Me encanta leer, hacer deportes, cocinar —especialmente pizzas—, jugar juegos de estrategia y a veces me divierto escribiendo y 
              desarrollando ideas o proyectos.</p>

              <p>Como abogado, me he desempeñado principalmente en Derecho Coporativo, Civil e Inmobiliario, trabaje en estudios jurídicos un tiempo y fui primer empleado en Lexgo, una Startup de Legaltech.</p>
             
              <p><span css={{fontWeight: 600, color: '#252525'}}>Lei que jugabas Poker?</span> Asi es! La primera mitad de mis 20s estuve dedicado a ser jugador profesional de poker, 
                durante el boom que dicho juego —deporte?!—  vivio en los primeros años del siglo XXI. Era una actividad que satisfacia mi necesidad de un desafío intelectual y de competitividad, a la vez siendo 
                bastante lucrativa y que permitia manejar horarios libremente, por lo cual fue una epoca muy entretenida. Lamentablemente luego vino el 
                declive cuando el DOJ y el FBI clausuraron uno de los mas grandes sitios del mundo y el volumen de gente decayo drásticamente, esto sumado a la tendencia 
                creciente hacia la profesionalidad y el auge de software de apoyo basados en teoría de juegos que hacian cada vez mas difícil la competencia en niveles
                altos y medios y lo más sensato fue dejarlo.
              </p>

                <p><span css={{fontWeight: 600, color: '#252525'}}>Para que es este sitio? Y que #?@!~ es ese logo?</span> El objetivo de este sitio es justamente compartir estas experiencias, más ser usado como mi sistema de notas personal y a la vez de desahogo de 
                  ideas que quizas a algunos de ustedes les puedan interesar. El logo iba a ser un ícono de un bonsai, pero en un despliegue de creatividad infinita —?— decidí crear mi propio logo
                  a base de ese bonsai, pero usando la J y la O de mi nombre —ya sé, genio artístico— como el tronco y hojas del bonsai. Al igual que mi foto de perfil hecha de pixeles, creada
                   por estas dos manitos.</p>

               <p> Si estas empezando en programación, te recomiendo revisar mi sección de <a href="https://www.joseocampo.org/course">cursos</a>.</p>






           
  
              
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
  