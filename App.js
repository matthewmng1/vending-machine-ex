import React from 'react';

import NavBar from './NavBar';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';

import { BrowserRouter, Route  } from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine/>
        </Route>
        <Route exact path="/soda">
          <Soda/>
        </Route>
        <Route exact path="/chips">
          <Chips/>
        </Route>
        <Route exact path="/candy">
          <Candy/>
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
