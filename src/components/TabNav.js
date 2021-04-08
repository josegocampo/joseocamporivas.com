import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import logo from '../images/mejorcalidad.png';
import TabContext from './TabContext';

const TabNav = ({ titles }) => {
  //this constant gets the names of the components and uses them as titles, alternatively you could also just
  //pass an array of props with the desired title names, but this is less code I think
  const { activeIndex, setActiveIndex } = React.useContext(TabContext);

  return (
    <div>
      {titles.map((title, index) => (
        <button
          className={activeIndex === index ? 'active' : 'not'}
          onClick={() => {
            setActiveIndex(index);
          }}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default TabNav;

// import * as React, {useContext, useState} from 'react'
// import * as ReactDOM from 'react-dom'

// let activeIndex = 0

// const TabContext = React.createContext({
//     activeIndex,
//     setActiveIndex: (index) => {
//         activeIndex = index
//     }
// })
// export default TabContext
// -----------------

// 3
// function Tab ({children}) {

//     const bla = "ble"

//     const handleChange = (activeTabIndex) => {
//         setActiveIndex(activeTabIndex)
//     }

//     return (<div>
//     <TabContext.Provider>
//         {children}
//     </TabContext.Provider>
//     </div>)
// }

// 1
// function TabNav ({titles}) {
//     const {activeIndex, setActiveIndex} = useContext(TabContext)
//     return (

//         <div>
//             {titles.map((title, index) => (<button className={activeIndex === index ? 'active' : 'not'} onClick={() => {
//                 setActiveIndex(index)
//             }}>{title}</button>))}
//         </div>
//     )
// }

// 2
// function TabView ({children}) {
//     const { activeIndex } = useContext(TabContext);

//     return (<div>{children[activeIndex]}</div>)
// }

// const A = () => (<div></div>)
// const B = () => (<div></div>)
// const C = () => (<div></div>)

// App
// const [channels, setChannels] = useState([{}])
// Renders each Channel
// Each channel renders a Tab
