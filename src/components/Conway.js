/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from './utils/MQs';
import React, { useState } from 'react';
import '../App.css';
import mejor from '../images/mejorcalidad.png';
import john from '../images/john.jpg';

function Conway() {
  const [color, setColor] = useState('white');

  const Bod = styled.div`
    margin: 0 auto;
    @media ${device.tablet} {
      max-width: 628px;
    }
    @media ${device.mobileL} {
      max-width: 468px;
    }
    @media ${device.mobileM} {
      max-width: 372px;
    }
    @media ${device.mobileS} {
      max-width: 365px;
    }
  `;

  const Sides = styled.div`
    margin: 0 auto;
    display: flex;
    flexdirection: row;

    max-width: 730px;

    @media ${device.tablet} {
      max-width: 628px;
    }
    @media ${device.mobileL} {
      max-width: 468px;
    }
    @media ${device.mobileM} {
      max-width: 372px;
    }
    @media ${device.mobileS} {
      max-width: 365px;
    }
  `;
  const Titulo = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.5rem;

    @media ${device.tablet} {
      font-size: 2.9rem;
    }
    @media ${device.mobileL} {
      max-width: 380px;
      font-size: 2.5rem;
      line-height: 3rem;
    }
    @media ${device.mobileM} {
      width: 340px;
      font-size: 2.2rem;
      line-height: 2.8rem;
    }
    @media ${device.mobileS} {
      max-width: 330px;
    }
    @media ${device.mobileXS} {
      max-width: 300px;
    }
  `;
  const Youtube = styled.iframe`
    @media ${device.tablet} {
      max-width: 570px;
    }

    @media ${device.tabletS} {
      max-width: 470px;
    }
    @media ${device.mobileL} {
      max-width: 350px;
    }
    @media ${device.mobileM} {
      width: 310px;
    }
    @media ${device.mobileS} {
      max-width: 300px;
    }
    @media ${device.mobileXS} {
      max-width: 260px;
    }
  `;

  const Image = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const Img = styled.img`
    margin: 0 auto;
    max-width: 657px;
    border-radius: 2px;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;

    @media ${device.tablet} {
      max-width: 570px;
    }

    @media ${device.tabletS} {
      max-width: 470px;
    }
    @media ${device.mobileL} {
      max-width: 350px;
    }
    @media ${device.mobileM} {
      width: 310px;
    }
    @media ${device.mobileS} {
      max-width: 300px;
    }
    @media ${device.mobileXS} {
      max-width: 260px;
    }
  `;

  const buttons = css({
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'fixed',
    zIndex: 1,
    height: 45,
    marginTop: 70,
    width: '7%',
    marginRight: 20,
    marginLeft: 5,
  });

  const green = css({
    color: '#616161',
    background: '#dfffe2c2',
  });

  const black = css({
    color: 'white',
    background: 'black',
  });

  const sepia = css({
    color: '#795649',
    background: '#ffefdb',
  });

  const white = css({
    color: '#333',
    background: 'white',
  });

  const none = css({
    display: 'none',
  });

  const tituloRojo = css({
    background: 'red',
  });

  const handleGreen = (e) => {
    setColor('green');
  };

  const handleBlack = (e) => {
    setColor('black');
  };

  const handleSepia = (e) => {
    setColor('sepia');
  };

  const handleWhite = (e) => {
    setColor('white');
  };

  let colorMode;

  if (color === 'white') {
    colorMode = white;
  } else if (color === 'green') {
    colorMode = green;
  } else if (color === 'black') {
    colorMode = black;
  } else if (color === 'sepia') {
    colorMode = sepia;
  }

  let noneWhite;
  let noneGreen;
  let noneBlack;
  let noneSepia;

  if (color === 'white') {
    noneWhite = none;
  } else if (color === 'green') {
    noneGreen = none;
  } else if (color === 'black') {
    noneBlack = none;
  } else if (color === 'sepia') {
    noneSepia = none;
  }

  return (
    <Bod className="App" css={colorMode}>
      <Sides className="left-right">
        <div css={buttons}>
          {color === 'white' ? (
            <div css={noneWhite} />
          ) : (
            <div className="color-mode" onClick={handleWhite} css={white}>
              <div></div>
            </div>
          )}
          {color === 'black' ? (
            <div css={noneBlack} />
          ) : (
            <div className="color-mode" onClick={handleBlack} css={black}>
              <div></div>
            </div>
          )}
          {color === 'green' ? (
            <div css={noneGreen} />
          ) : (
            <div className="color-mode" onClick={handleGreen} css={{ background: '#97ffa1c2' }}>
              <div></div>
            </div>
          )}
          {color === 'sepia' ? (
            <div css={noneSepia} />
          ) : (
            <div className="color-mode" onClick={handleSepia} css={{ background: '#fdd9ab' }}>
              <div></div>
            </div>
          )}
        </div>

        <div
          className="text"
          css={{
            margin: '0 auto',
            width: '93%',
          }}
        >
          <div className="essay">
            <Titulo css={{ marginTop: 20 }} className="titulo">
              Un Genio Mágico y su Juego de la Vida
            </Titulo>
            <Image>
              {' '}
              <img src={mejor} className="me2" />{' '}
              <span css={{ color: 'rgb(152 152 152)', fontSize: '0.9rem' }}>
                <span css={{ color: 'pink' }}>Jose Ocampo</span>
                <br />
                Agosto 15, 2020 · 6 minutos de lectura
              </span>
            </Image>
            <p css={{ color: 'rgba(117, 117, 117, 1)', fontSize: '1.4rem', lineHeight: '2.2rem' }}>
              "Richard Feynman era un genio mágico. Lo mismo siempre me impacto de John –era un
              matemático mágico. Era un genio mágico más que un genio ordinario.”
            </p>
            <Img src={john} />
            <p>John Conway fue uno de los matemáticos más destacados del último siglo.</p>
            <p>
              {' '}
              Paso gran parte de su carrera como profesor e investigador en Princeton, logrando
              grandes avances en geometría, teoría de juegos, teoría de grupos finitos, teoría de
              juegos y teoría de códigos, por su elevada inteligencia en más de una ocasión
              científicos estudiaron su cerebro para entender cómo funcionaba.
            </p>
            <p>
              A pesar de todo esto siempre mantuvo una actitud muy humilde y sencilla, pero con solo
              escucharlo unos minutos podemos entender su poder de razonamiento.{' '}
            </p>

            <p>Entre sus logros más destacados están:</p>

            <ul>
              <li>Descubrimiento de los números surreales.</li>
              <li>El Teorema del Libre Albedrio (Free Will Theorem)</li>
              <li>Descubrimiento de los Grupos Conway (Conway Group)</li>
              <li>Creación del Juego de la Vida.</li>
            </ul>

            <p>
              Fue descrito por eminencias de la matemática y del mundo de la programación como un
              “genio mágico”, “matemático legendario”. Neil Sloane, destacado matemático, lo
              describió como “la persona más rápida en resolver problemas que he visto”. Simon
              Kochen, su co autor en el Free Will Theorem, pone en perspectiva el genio de Conway:
            </p>

            <p>
              “En matemáticas y física hay dos tipos de genios. Están los genios ordinarios –son
              como tu y yo, pero son mejores en lo que hacen; si trabajamos lo suficientemente duro,
              quizás podríamos alcanzar sus mismos resultados. Pero también están los genios
              mágicos. Richard Feynman era un genio mágico. Lo mismo siempre me impacto de John –era
              un matemático mágico. Era un genio mágico más que un genio ordinario”.
            </p>

            <p>
              A finales de los 60 desarrollo un autómata celular, el cual llamaría “The Game of
              Life”. Lo baso en una idea de John von Neumann de que para colonizar otros planetas se
              necesitaría primero enviar maquinas que fueran creando una atmosfera y construyendo
              las primeras estructuras que sustentarían a los humanos en un futuro. Para lograr
              esto, se necesitaría maquinas que fuesen capaces de construir copias de si mismas, lo
              cual es muy complicado, en general para construir una cierta maquina necesitas tener
              una maquina más compleja que esta que sea capaz de desarrollarla desde cero.
            </p>

            <p>
              Luego de 18 meses experimentando en los breaks de almuerzo con otros colegas,
              basándose en un tablero de Go, encontraron un set de reglas que tenía unas propiedades
              muy interesantes. Con un algoritmo bastante simple lograron crear un sistema de
              autómata celular en que es imposible predecir lo que ocurrirá con la mayoría de las
              configuraciones en un futuro, es decir, no se puede crear un algoritmo que vaya a
              predecir con exactitud en qué momento la simulación va a terminar o que tanto se va a
              expandir la “vida”.
            </p>

            <p>
              Una propiedad más impresionante aún, que los matemáticos lograron probar, es que con
              estos “seres” cualquier cosa puede pasar, pueden hacer cualquier tipo de computación y
              se pueden diseñar configuraciones que se reconstruyesen a ellas mismas, crearan
              maquinas más complejas que ellas mismas, o bien, se replicaran infinitamente, es lo
              que se llama Turing Complete.
            </p>

            <p>
              No solo eso, todo el juego fue diseñado y las pruebas matemáticas se hicieron sin
              ayuda de computadores!
            </p>

            <p>Las reglas son las siguientes:</p>

            <p>
              Tenemos un tablero con casilleros, como lo podría ser un tablero de ajedrez, o de Go.
              Cada casillero es una “célula”, cada célula tiene 8 vecinos, los cuadrados adyacentes,
              arriba, abajo, izquierda, derecha y cada uno de las cuatro diagonales. Podemos elegir
              configuraciones iniciales con células vivas. Una célula muerta cobra vida cuando entra
              en contacto con 3 vecinos vivos. Una célula viva muere si tiene menos de 2 vecinos,
              por soledad, o más de 3 vecinos, por sobrepoblación.
            </p>

            <p>
              Las combinaciones que se pueden dar son realmente impresionantes como podemos ver en
              el video a continuación
            </p>

            <Youtube
              width="560"
              height="315"
              src="https://www.youtube.com/embed/R9Plq-D1gEk"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              css={{ marginBottom: 35 }}
            ></Youtube>

            <p>
              El Juego de la Vida se ha estudiado exhaustivamente a través de los años para entender
              porque tiene dichas propiedades y se ha utilizado para entender sistemas tan complejos
              como la evolución de la vida y las especies.
            </p>

            <p>
              A pesar de todo esto, John Conway no le tenía mucho cariño al Juego de la Vida, porque
              si bien el estaba feliz de su experimento, creía que la gente le daba demasiada
              importancia al juego y esto opacaba otros descubrimientos y pruebas que logro que le
              parecían mucho más interesantes y con mas aplicaciones.
            </p>
            <p>
              Pueden ver en el siguiente video a Conway hablando sobre el Game of Life, en uno de
              una serie de videos que Numberphile le hizo en 2014, les recomiendo ver los otros
              también, van a poder tener una mirada a lo que es la inteligencia de John Conway.
            </p>

            <p>Lamentablemente John Conway falleció el 11 de abril de 2020 por Covid-19.</p>

            <p>
              Desarrolle este proyecto hace unas semanas como practica y me llamo la atención no
              encontrar ninguna versión en español del autómata celular de Conway, así que tras
              encontrar un dominio apropiado libre, decidí subirla para que más gente tenga la
              oportunidad de conocer el Game of Life y la vida de este destacado genio mágico. A mí
              me lleno de alegría conocerlo y tener una mirada a cómo funciona su mente y espero que
              a ustedes también.
            </p>
            <p>
              Si no te interesan los aspectos más técnicos de cómo crear un Game of Life propio
              deberías llegar hasta aquí, lo que viene a continuación tiene que ver con el
              desarrollo de la aplicación del Juego de la Vida en sí.
            </p>
            <p>
              <h2 css={{ marginTop: 70 }}>Pasando a la programación:</h2>
            </p>

            <p>
              Desarrollar el Juego de la Vida requiere ciertos conocimientos de algoritmos, en este
              caso el algoritmo es bastante sencillo y se puede desarrollar en casi cualquier
              lenguaje.
            </p>
            <p>
              Para crear el tablero vamos a usar un Array o Lista bi-dimensional, con columnas y
              filas. Para esto vamos a crear un primer array que va a tener un numero de índices
              igual a la cantidad de filas que queramos tener en el tablero y cada índice de ese
              array va a ser a la vez otro array con el largo de columnas que queramos que tenga el
              tablero. Cada índice de cada uno de los sub arrays (los arrays que son las filas) va a
              ser una de las células del tablero.
            </p>
            <p>
              Para revisar las células vivas y muertas y cuales deben pasar a estar muertas o vivas
              en la próxima generación vamos a necesitar ocupar una técnica llamada Double
              Buffering, que es una técnica utilizada para reproducir gráficos, que es una manera
              complicada de decir que vamos a revisar y actualizar todos los bloques individualmente
              antes de actualizar el tablero completo, y una vez revisados vamos a actualizar el
              tablero completo con la nueva versión.
            </p>
            <p>
              La aplicación que yo desarrolle esta echa en React, por lo que usar el estado y
              actualizarlo constantemente no era la mejor opción por 2 motivos: 1) habrían
              muchísimas actualizaciones de estado, causando que el componente se reprodujera cada
              vez que chequeamos un bloque, lo cual sería O(n^2) veces. 2) cada vez que actualicemos
              un bloque podría causar que los que va a pasar con los otros bloques cambie en razón
              de la actualización de este primer bloque, lo cual no es la idea.
            </p>
            <p>
              Hay más de una forma de resolver ese problema, pero me decidí por usar Immer, que gano
              los premios de Breakthrough of the year" React open source award y "Most impactful
              contribution" JavaScript open source award en 2019.
            </p>
            <p>
              Me sirvió para conocer este pequeño paquete para React que te permite trabajar con un
              estado inmutable de manera muy sencilla al crear una copia (draft) del estado con el
              cual trabajas, modificas y luego cuando está listo tienes la opción de cambiarlo por
              el estado actual, haciendo más limpio el trabajo al no haber mutado el estado inicial
              en ningún momento. Es muy útil para Redux también, simplifica bastante los reducers y
              es realmente fácil de usar.
            </p>
            <p>
              Luego, necesitamos también chekear cada célula individual mientras hacemos el loop
              contra sus vecinos para ver si vamos a cambiar su estado o mantenerlo igual, por lo
              que alguna forma de guardar una variable que contenga las combinaciones de vecinos y
              las checkee contra el índice del bloque será una buena idea.
            </p>
            <p>
              Por último, tenemos que crear la visualización del tablero, dar la opción para
              checkear los distintos casilleros para así darles vida, para que los usuarios puedan
              probar distintas configuraciones y una función para darle comienzo a la simulación.
              Eso se los dejare a ustedes, ya que son elementos mas comunes,
            </p>
            <p>
              Además de esto, a mi aplicación en particular le añadí ciertas funcionalidades como
              poder acelerar o desacelerar la velocidad en que pasan las generaciones de vida del
              juego, una opción para poner configuraciones al azar, distintos colores en los bloques
              en base a números aleatorios, hay colores que tienen una posibilidad más alta de
              aparecer que otros, y botones para empezar y detener la simulación y otro para limpiar
              el tablero.
            </p>
            <p>Cosas que tengo pendientes para hacer son:</p>
            <ol>
              <li>Dar la opción para agrandar y achicar el tablero.</li>
              <li> Poner la opción para poder cargar ciertas configuraciones predeterminadas.</li>
              <li> Poner las reglas y la historia del juego de manera más ordenada.</li>
              <li> Terminar ciertos estilos de la página. </li>
            </ol>
          </div>
        </div>
      </Sides>
      <div
        css={{
          margin: '0 auto',
          maxWidth: 600,
          color: 'rgb(152 152 152)',
          borderTop: '1px solid #aaa',
          marginTop: 61,
          textAlign: 'center',
          fontSize: '0.7rem',
          paddingTop: 20,
          paddingBottom: 40,
        }}
      >
        © Jose Ocampo, 2020 | Todo hecho a mano
      </div>
    </Bod>
  );
}

export default Conway;
