import React from 'react';
import { Link } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';

function Home() {
    return (
      <div>
       <p>You reached the homepage. Go you.
       Are you at least 21 years of age?</p>
       <Link to='/UnderAge'>No</Link> | <Link to='/BeerList'>Yes</Link>
      </div>
    );
  }
  
  export default Home;