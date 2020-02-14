import React from 'react';
import { Link } from 'react-router-dom';

var navStyling = 
  {
    display: 'block',
    margin: '20px 0px',
    fontSize: '16px',
    fontFamily: 'monospace'
  }

var linkStyle = 
  {
    color: 'black',
    marginTop: '-45px',
    padding: '3px',
    float: 'right'
  }

function Header() {
  return (

    <div style={navStyling}>
      <h2>
        <style jsx> {`
      h2 {
        color: orange;
      }
      h2:hover {
        color: orange;
      }
      `}</style> 
       Seattle Brewery</h2>
       <p style={linkStyle}><Link to='/'>Home</Link> | <Link to='/BeerList'>See Our Beers!</Link> | <Link to='/Employee'>Employees</Link></p>
      <hr/>
    </div>
  );
}

export default Header;