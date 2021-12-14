import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Clock from './Clock';
import Timer from './Timer';
import Chronometer from './Chronometer';

function RouterPages() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Clock } />
        <Route exact path="/timer" component={ Timer } />
        <Route exact path="/chronometer" component={ Chronometer } />
      </Switch>
    </BrowserRouter>
  );
}

export default RouterPages;
