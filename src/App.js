import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, About } from './pages';
import { Navbar, Alert } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Alert />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} exact component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
