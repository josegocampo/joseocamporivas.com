import React, { useContext } from 'react'
import TabContext from './TabContext'
 

const TabView = ({children}) => {
    console.log(children[0].type.name)
    const { activeIndex } = React.useContext(TabContext);
    console.log(activeIndex)


    return (<div>{children[activeIndex]}</div>)
}


export default TabView