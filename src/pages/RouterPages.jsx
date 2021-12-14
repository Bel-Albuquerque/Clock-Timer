import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Clock from './Clock';
import Timer from './Timer';
import Chronometer from './Chronometer';
import MyProvider from '../context/MyProvider';

function RouterPages() {
  return (
    <BrowserRouter>
      <Switch>
        <MyProvider>
          <Route exact path="/" component={ Clock } />
          <Route exact path="/timer" component={ Timer } />
          <Route exact path="/chronometer" component={ Chronometer } />
        </MyProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default RouterPages;
