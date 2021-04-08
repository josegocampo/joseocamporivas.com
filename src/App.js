import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/Landing';
import EssayTemplate from './components/EssayTemplate';
import Nav from './components/Nav';
import Garden from './components/Garden';
import About from './components/About';
import Proyects from './components/Proyects';
import Course from './components/Course';
import Cgol from './components/Cgol';
import Conway from './components/Conway';
import Program from './components/Program';
import Essays from './components/Essays';
import Esperanza from './components/Esperanza';
import Hellosaurus from './components/Hellosaurus';
import Test from './components/Test';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/essay" component={EssayTemplate} />
        <Route exact path="/garden" component={Garden} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/proyects" component={Proyects} />
        <Route exact path="/cgol" component={Cgol} />
        <Route exact path="/about" component={About} />
        <Route exact path="/essays" component={Essays} />
        <Route exact path="/conway" component={Conway} />
        <Route exact path="/esperanza" component={Esperanza} />
        <Route exact path="/hellosaurus" component={Hellosaurus} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
