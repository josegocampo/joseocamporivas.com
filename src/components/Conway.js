/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { device } from './utils/MQs'
import React, { useState } from 'react'
import '../App.css';
import mejor from '../images/mejorcalidad.png';
import john from '../images/john.jpg';



function Conway() {


  const [color, setColor] = useState('white')

  const Bod = styled.div`
    margin: 0 auto;
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

  const Sides = styled.div`
      margin: 0 auto;
      display: flex;
      flexDirection: row;
      paddingTop: 40px;
      max-width: 730px;
      margin-top: 20px;

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
      max-width: 570px;
      }
      
    @media ${device.tabletS}{
      max-width: 470px;
      }
      @media ${device.mobileL}{
        max-width: 350px;
    }
    @media ${device.mobileM}{
      width: 310px;
    }
    @media ${device.mobileS}{
      max-width: 300px;
}
@media ${device.mobileXS}{
  max-width: 260px;
}
    `

  const Image = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `
    
    const Img = styled.img`
    margin: 0 auto;
    max-width: 657px;
    border-radius: 2px;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    
    @media ${device.tablet}{
      max-width: 570px;
      }
      
    @media ${device.tabletS}{
      max-width: 470px;
      }
      @media ${device.mobileL}{
        max-width: 350px;
    }
    @media ${device.mobileM}{
      width: 310px;
    }
    @media ${device.mobileS}{
      max-width: 300px;
}
@media ${device.mobileXS}{
  max-width: 260px;
}
    `


    
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
    marginLeft: 5
  })



  const green = css({
    color: '#616161',
    background: '#dfffe2c2',
  })

  const black = css({
    color: 'white',
    background: 'black',
  })

  const sepia = css({
    color: '#795649',
    background: '#ffefdb',
  })

  const white = css({
    color: '#333',
    background: 'white',
  })

  const none = css({
    display: 'none'
  })

  const tituloRojo = css({
    background: 'red'
  })


  const handleGreen = e => {
    setColor('green')
  }

  const handleBlack = e => {
    setColor('black')
  }

  const handleSepia = e => {
    setColor('sepia')
  }

  const handleWhite = e => {
    setColor('white')
  }


  let colorMode;

  if (color === 'white') {
    colorMode = white
  }
  else if (color === 'green') {
    colorMode = green
  }
  else if (color === 'black') {
    colorMode = black
  }
  else if (color === 'sepia') {
    colorMode = sepia
  }

  let noneWhite;
  let noneGreen;
  let noneBlack;
  let noneSepia;

  if (color === 'white') {
    noneWhite = none
  }
  else if (color === 'green') {
    noneGreen = none
  }
  else if (color === 'black') {
    noneBlack = none
  }
  else if (color === 'sepia') {
    noneSepia = none
  }



  return (


    <Bod className="App" css={colorMode} >

      <Sides className="left-right">

        <div css={buttons}>
          {color === 'white' ? <div css={noneWhite} /> : <div className="color-mode" onClick={handleWhite} css={white} ><div></div></div>}
          {color === 'black' ? <div css={noneBlack} /> : <div className="color-mode" onClick={handleBlack} css={black} ><div></div></div>}
          {color === 'green' ? <div css={noneGreen} /> : <div className="color-mode" onClick={handleGreen} css={{background: '#97ffa1c2'}} ><div></div></div>}
          {color === 'sepia' ? <div css={noneSepia} /> : <div className="color-mode" onClick={handleSepia} css={{background: '#fdd9ab'}} ><div></div></div>}
        </div>



        <div className="text" css={{
          margin: '0 auto',
          width: '93%',
        }}>
  








          <div className="essay">

            <Titulo css={{marginTop: 30}} className="titulo">Why you should hire Jose Ocampo as Hellosaurus JS Intern</Titulo>
           <Image> <img src={mejor} className="me2" /> <span css={{color: 'rgb(152 152 152)', fontSize: '0.9rem'}}><span css={{color: 'pink'}}>Jose Ocampo</span><br/>September 15, 2020  · 4 minutes reading time</span></Image>
            <p css={{color: 'rgba(117, 117, 117, 1)', fontSize: '1.4rem', lineHeight: '2.2rem'}}>
  
            I want to share a little bit about why I'm excited for the position, why I think I am a perfect fit for the role and also in the end give you guys some info which could be helpful for you, all in under 1000 words (aka 3 minutes).

</p>
            <Img src={john}/>
            <p>I have done my research:
.</p>
            <p>I have read all that I’ve been able to find about Hellosaurus, talked with a few acquaintances that also got into this YC batch, watched the birthday show and read about entertainment, education and specifically online education for kids, and I am truly excited about the opportunity and the market that Hellosaurus is solving for. By the way, the comments were very good about the Startup and about James.
 </p>
 
            <p>
I think this is an excellent opportunity and time to help parents and provide fun, entertainment and education to kids all over the world.
</p>


<p>
I would love to be part of the team and help Hellosaurus grow as much as I can!

</p>

<p>
I am a Web Developer and also a Lawyer, but more importantly I like to consider myself as a Full Stack problem solver and facilitator, the tool that will be used depends on the context of the problem we are trying to solve itself. 

</p>

<p>
At the previous Startup I worked at, a Legaltech where I was the first employee, -in which we qualified and went to the YC interview last December, but sadly didn't get in-, I wore many hats, from taking care of sales, helping with the development of the software and marketing pages, copywriting, creating content, managing social media, to reviewing and drafting contracts, and managing a team of 12 lawyers distributed all over the world. I was kind of like a mini CEO and my job was making the CEO’s life easier and solving the problems that needed taking care of. During that time we escalated from 60k annual recurring revenue to 200k, raised seed money, and moved to international markets.

</p>

<p>
The tools I specifically use to solve a problem will depend on what you need me to work on.


</p>

<p>
I know this position if for a JavaScript internship, for which I am very well qualified, having studied Web Development and Computer Science at Lambda School (another YC company) and having built several apps using technologies based on JavaScript at its core, which I hope to have the opportunity to show to you.

</p>

<p>My main stack is React with Redux and Styled Components or CSS w/LESS for the FrontEnd and Node.js with Express, Knex, Relational Databases and Rest APIs for the Backend.
</p>

<p>I love building apps and solving complex problems, while providing a clean and ordered solution, but I am always open to help with whatever is needed. I know first hand that Startups sometimes have the need for team members to do many different things.
</p>

 <p>
 I am also the father of an amazing 2 year old and that makes me even more connected and excited for what we will be building.

 </p>

<p>I know you might be thinking I'm too far away, but what does physical distance even mean in these days really, everyone is working remotely and we might be for a while, and we only have 1 hour difference from Chile to NY! I also have family in the U.S, my godmother (who is my aunt) lives in Berkeley, and my cousins are split between SF, Oakland and Berkeley too, and I have a cousin living in NY who stayed there after going for a MPA in Columbia. </p>







<p>
Also Chile and the U.S have a free trade agreement which means chileans are one out of of -I think- 2 nationalities in the world (Chile and Singapore) to be applicable for a H-1B1 visa, which is a lot easier to get and has a lot of privileges for chileans to go and work there on specialized industries, so if it comes to relocating in the future that is certainly an option too. I know I'm getting ahead of myself here, but just clearing some could be doubts.


</p>  

<p>
  A pesar de todo esto, John Conway no le tenía mucho cariño al Juego de la Vida, porque si bien el estaba feliz de su experimento, creía que la gente le daba demasiada importancia al juego y esto opacaba otros descubrimientos y pruebas que logro que le parecían mucho más interesantes y con mas aplicaciones.

</p>  


<p><h2 css={{marginTop: 70}}>Regardless of your decision to choose me or not, I found two very interesting content creators that I think would be a perfect fit for creating on and endorsing Hellosaurus. 
</h2></p>



<p>One is Ana Lorena Fabrega, this is her website. She is a former elementary school teacher who transitioned into being an advocate for online and alternative learning methods for kids and is currently associated with David Perell (maybe you have heard of him), creating very interesting content around education and learning for kids and has quite an audience.

</p>

<p>
She is super extroverted and likeable too, has an very entertaining persona, I think she could be a great fit for Hellosaurus in many different qualities. 
</p>  
<p>
The other is Kenziee Wenz , probably not so well known, but went viral a few days ago when someone shared one of her TikTok videos teaching her kindergarten students online. She clearly has a huge passion for what she does, and I could instantly imagine her creating content for Hellosaurus. Here is the video https://www.tiktok.com/@kenziiewenz/video/6872410436180921605?lang=es
</p>  

<p>
Maybe that information could be helpful if you didn't have them in your radar.

</p>  
<p>
Best Regards,
</p>  
<p>
Jose
</p>  
<p>
Linkedin: https://www.linkedin.com/in/joseocampo/?locale=en_US
Twitter: https://twitter.com/josegocampo
Personal Website: https://www.joseocampo.org/conway   (only in Spanish for now, translated version coming)
</p>  


 

                        
                      </div>
                          
                      
                
            
          </div>
          
          </Sides>
              <div css={{
                margin: '0 auto', maxWidth: 600, color: 'rgb(152 152 152)', borderTop: '1px solid #aaa', marginTop: 61,
                textAlign: 'center', fontSize: '0.7rem', paddingTop: 20, paddingBottom: 40
              }}>© Jose Ocampo, 2020 | Todo hecho a mano</div>
          </Bod>
          
    
    
        
          
    
      );
    }
    
    export default Conway;