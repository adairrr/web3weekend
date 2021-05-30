import React, { useState } from 'react'
import Top from './components/top'
import Bottom from './components/bottom'
import Dashboard from './views/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = _ => {
  return (
    <Router>
      <Top />
      <Bottom />
      <Switch>
        <Route path="/"><Dashboard /></Route>
      </Switch>
    </Router>
  )
}

export default App
