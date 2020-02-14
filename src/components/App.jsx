import React from 'react';
import Home from './Home';
import Header from './Header';
import BeerList from './BeerList';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/BeerList' component={BeerList} />
      </Switch>
    </div>
  );
}

export default App;