import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Landing from './components/Landing'
import EssayTemplate from './components/EssayTemplate'

function App(){
    

return(

<div className="App">
        <Route exact path="/" component={Landing} />
    
        <Route exact path="/essay" component={EssayTemplate} />
        {/* // <Route path="/newevent" component={NewEventForm} />
        // <Route path="/editevent" component={EditEvent} /> */}
</div>
)
}

export default App;