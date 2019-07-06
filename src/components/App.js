import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import Header from './layout/Header';
import Main from '../views/Main';
import Continents from '../views/Continents';
import Continent from '../views/Continent';

const App = () => (
  <div className="App">
    <div className="main-container d-flex flex-column">
      <Header />
      <div className="d-flex flex-fill justify-content-center align-items-center">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/continents" component={Continents} />
          <Route exact path="/continents/:code" component={Continent} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
