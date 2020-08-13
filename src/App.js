import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Landing from './components/Landing'
import EssayTemplate from './components/EssayTemplate'
import Nav from './components/Nav'
import Garden from './components/Garden'
import About from './components/About'
import Proyects from './components/Proyects'
import Course from './components/Course'
import Cgol from './components/Cgol'
import Pizza from './components/Pizza'
import Program from './components/Program'


function App(){
    

return(

        
             
                <Router>
                        <Nav/>
                             <Switch>
                                        <Route exact path="/essay" component={EssayTemplate} />
                                        <Route exact path="/" component={Landing} />
                                        <Route exact path="/garden" component={Garden} />
                                        <Route exact path="/course" component={Course} />
                                        <Route exact path="/proyects" component={Proyects} />
                                        <Route exact path="/cgol" component={Cgol} />
                                        <Route exact path="/about" component={About} />
                                        <Route exact path="/essay/pizza" component={Pizza} />
                                        <Route exact path="/essay/program" component={Program} />
                                       
                                       
                                        
                             </Switch>
                        
                </Router>
              

)
}

export default App;