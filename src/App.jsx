import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import VendingMachine from './VendingMachine'
import Chips from './Chips'
import Soda from './Soda'
import Water from './Water'
import Navbar from './Navbar'
import Typography from '@mui/material/Typography'
import './App.css'

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
          <Typography variant="h1" component="h1" sx={{ py: 5 }}>
            Vending Machine
          </Typography>
        </header>
        <main>
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
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App
