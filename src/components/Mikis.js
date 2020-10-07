import * as React, {useContext, useState} from 'react'
import * as ReactDOM from 'react-dom'

let activeIndex = 0

const TabContext = React.createContext({ 
    activeIndex,
    setActiveIndex: (index) => {
        activeIndex = index
    }
})
export default TabContext
// -----------------

// 3
function Tab ({children}) {

    const bla = "ble"

    const handleChange = (activeTabIndex) => {
        setActiveIndex(activeTabIndex)
    }

    return (<div>
    <TabContext.Provider>
        {children}
    </TabContext.Provider>
    </div>)
}

// 1
function TabNav ({titles}) {
    const {activeIndex, setActiveIndex} = useContext(TabContext)
    return (

        <div>
            {titles.map((title, index) => (<button className={activeIndex === index ? 'active' : 'not'} onClick={() => {
                setActiveIndex(index)
            }}>{title}</button>))} 
        </div>
    )
}

// 2
function TabView ({children}) {
    const { activeIndex } = useContext(TabContext);

    return (<div>{children[activeIndex]}</div>)
}

const A = () => (<div></div>)
const B = () => (<div></div>)
const C = () => (<div></div>)

// App
    // const [channels, setChannels] = useState([{}])
// Renders each Channel
// Each channel renders a Tab

ReactDOM.render(
  <div className="App">
    <Tab>
        <TabNav titles={['title 1', 'title 2', 'title 3']} />
        <TabView>
            <A/>
            <B/>
            <C/>
        </TabView>
    <Tab/>
  </div>,
  document.getElementById('root')
);
