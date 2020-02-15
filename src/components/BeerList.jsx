import React from 'react';
import Beer from './Beer';

var BeerListStyling=
  {
    fontFamily: 'didot',
    paddingLeft: '34px',
    paddingRight: '34px'
  }

var masterBeerList = [
  {
    name: 'Mango Sour',
    brand: 'Seattle Beer Company',
    location:'Seattle, Washington',
    alcoholContent: '5%',
    price: 5
  },
  {
    name: 'Pineapple Sour',
    brand: 'PNW Beer Co.',
    location:'Bend, Oregon',
    alcoholContent: '6.5%',
    price: 6
  },
  {
    name: 'The best dang beer ever!',
    brand: 'I Love Donkeys',
    location:'Shi Shi Beach, Washington',
    alcoholContent: '8%',
    price: 8
  },
  {
    name: 'Nordic Berry Cider',
    brand: 'Kopparberg',
    location:'Sweden',
    alcoholContent: '4%',
    price: 8
  },
  {
    name: 'Blackberry Cider',
    brand: 'Pescadero Cidery',
    location:'Pescadero, California',
    alcoholContent: '6%',
    price: 9
  }
];

var parent = 
{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gridColumnGap: '0px',
  gridRowGap: '0px'
}

function BeerList() {
  return (

      <div style={BeerListStyling}>
        {masterBeerList.map((beer, index) =>
          <Beer 
            name={beer.name}
            brand={beer.brand}
            location={beer.location}
            alcoholContent={beer.alcoholContent} 
            price={beer.price}
            key={index} />
        )}
       </div>
  );
}

export default BeerList;