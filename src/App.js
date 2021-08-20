import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Reports from './pages/Report';
import Products from './pages/Products';
import Team from './pages/Team';
import Messages from './pages/Messages';
import Suport from './pages/Suport';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/team' component={Team} />
          <Route path='/messages' component={Messages} />
          <Route path='/suport' component={Suport} />
        </Switch>
      </Router>
    </>
  );
}

export default App;