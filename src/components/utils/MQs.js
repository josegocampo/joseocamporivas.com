const size = {
    mobileS: '365px',
    mobileM: '372px',
    mobileL: '468px',
    tablet: '628px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(min-width: ${size.tablet})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };



  

// const cuerpo = css({
//     margin: '0 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     width: 700,
//     alignItems: 'flex-start',
//   })


// const topleft = css({
//     margin: '0 auto',
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     textAlign: 'left',
//     justifyContent: 'space-between',
//     paddingTop: 10
//   })

// const presentacion = css({
//     margin: '0 auto',
//     flexDirection: 'column',
//     fontSize: '0.9rem',
//     font-weight: 500,
//     line-height: '1.5rem',
//     letterSpacing: 1.5,
//     display: 'flex',
//     alignItems: 'center',
//     marginRight: 20,
//     width: '66%',
//     display: 'flex',
//     flexDirection: 'column',
//     textAlign: 'left',
//     justifyContent : 'flex-start',
//     paddingLeft: 20,
//   })

//   const presentacion2 = css({
//     fontSize: '0.9rem',
//     font-weight: 500,
//     lineHeight: '1.6rem',
//     letterSpacing: 1.5,
//     marginRight: 20,
//     display: 'flex',
//     flexDirection: 'column',
//     textAlign: 'left',
//     justifyContent : 'flex-start',
//     paddingLeft: 20,
//     width: '83%'
//   })


// const images = css({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     width: '33%',
//     marginRight: 50,
//     marginTop: 60,
//     marginBottom: 20
// })

// const img = css({
//     borderRadius: '50%',
//     width: 200,
// })

// const icons = css({
//     margin: '0 auto',
//     width: 140,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginLeft: 275,
//     marginTop: 10
   
// })

// const icon = css({
//     width: 30,
//     marginTop: 20,
//     borderRadius: 5,
//     '&:hover': {cursor: 'pointer'}
// })
