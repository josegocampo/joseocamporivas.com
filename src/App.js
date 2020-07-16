import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Landing from './components/Landing'
import EssayTemplate from './components/EssayTemplate'
import Nav from './components/Nav'

function App(){
    

return(

        
             
                <Router>
                        <Nav/>
                             <Switch>
                                        <Route exact path="/essay" component={EssayTemplate} />
                                        <Route exact path="/" component={Landing} />
                             </Switch>
                </Router>
              

)
}

export default App;