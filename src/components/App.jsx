import React from 'react';
import Home from './Home';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/BeerList' component={BeerList} /> */}
      </Switch>
    
      <Header />

    </div>
  );
}

export default App;