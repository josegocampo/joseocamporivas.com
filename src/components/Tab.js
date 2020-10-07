import React, { useContext, useState } from 'react'
import TabContext from './TabContext'


const Tab = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0)
   
    const changeIndex = {
        activeIndex,
        setActiveIndex}

    return (
    <div>
    <TabContext.Provider value={changeIndex} >
        {children}
    </TabContext.Provider>
    </div>
    )
}


export default Tab