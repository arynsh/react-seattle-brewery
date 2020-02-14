import React from 'react';
import { Link } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';

var homeStyling= 
  {
    textAlign: 'center',
    fontFamily: 'didot'
  }

function Home() {
    return (
      <div>
       <p style={homeStyling}>You reached the homepage. Go you.
       Are you at least 21 years of age?</p>
       <p style={homeStyling}><Link to='/UnderAge'>No</Link> | <Link to='/BeerList'>Yes</Link></p>
      </div>
    );
  }
  
  export default Home;