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
import WtW from './components/WtW';
import Essays from './components/Essays';
import Esperanza from './components/Esperanza';
import Hellosaurus from './components/Hellosaurus';
import Test from './components/Test';
import LawyerToHacker from './components/LawyerToHacker';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/essay" component={EssayTemplate} />
        <Route exact path="/garden" component={Garden} />
        <Route exact path="/courses" component={Course} />
        <Route exact path="/proyects" component={Proyects} />
        <Route exact path="/cgol" component={Cgol} />
        <Route exact path="/about" component={About} />
        <Route exact path="/essays" component={Essays} />
        <Route exact path="/wtw" component={WtW} />
        <Route exact path="/lth" component={LawyerToHacker} />
        <Route exact path="/esperanza" component={Esperanza} />
        <Route exact path="/hellosaurus" component={Hellosaurus} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
