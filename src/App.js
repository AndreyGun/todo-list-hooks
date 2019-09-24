import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, About } from './pages/index';
import { Navbar } from './components/index';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} exact component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
