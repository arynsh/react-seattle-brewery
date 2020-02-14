import React from 'react';
import Beer from './Beer';

var masterBeerList = [
  {
    name: 'Mango Sour',
    brand: 'Seattle Beer Company',
    alcoholContent: '5%',
    price: 5
  },
  {
    name: 'Pineapple Sour',
    brand: 'PNW Beer Co.',
    alcoholContent: '6.5%',
    price: 6
  },
  {
    name: 'The best dang beer ever!',
    brand: 'I Love Donkeys',
    alcoholContent: '8%',
    price: 8
  }
];

function BeerList() {
  return (
    <div>
      <hr />
      {masterBeerList.map((beer, index) =>
        <Beer 
          name={beer.name}
          brand={beer.brand}
          alcoholContent={beer.alcoholContent} 
          price={beer.price}
          key={index} />
      )}
    </div>
  );
}

export default BeerList;