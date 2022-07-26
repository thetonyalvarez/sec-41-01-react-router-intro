import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import VendingMachine from './VendingMachine'
import Chips from './Chips'
import Soda from './Soda'
import Water from './Water'
import './App.css'

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header>
        <h1>Vending Machine</h1>
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <VendingMachine />
            </Route>
            <Route exact path="/chips">
              <Chips />
            </Route>
            <Route exact path="/soda">
              <Soda />
            </Route>
            <Route exact path="/water">
              <Water />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App
