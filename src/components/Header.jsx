import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>

    <h2><style jsx> {`
    h2 {
      color: black;
    }
    h2:hover {
      color: orange;
    }
    `}</style>Seattle Brewery</h2>
    <Link to='/'>Home</Link> | <Link to='/BeerList'>See Our Beers!</Link> | <Link to='/Employee'>Employees</Link>
    </div>
  );
}

export default Header;