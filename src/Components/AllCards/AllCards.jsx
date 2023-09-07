import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokiCard from './PokiCard';

const AllCards = () => {
  const [cards, setCards] = useState([]);


  useEffect(() => {
    axios.get('https://api.tcgdex.net/v2/en/cards')
      .then(response => {
        const pokiData=response.data;
        setCards(pokiData);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });
  }, []);
console.log(cards.pokiData);

  return (
    <div className='cardContainer'>
      {cards.map((card, index) =>(  
        <PokiCard pokiData={card} key={card.id}/>
      ))}
    </div>
  );
};

export default AllCards;
