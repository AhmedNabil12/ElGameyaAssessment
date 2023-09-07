import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokieSets from './PokieSets';

const AllSets = () =>{

  const [sets, setSets] = useState([]);


    useEffect(() => {
        axios.get('https://api.tcgdex.net/v2/en/sets')
          .then(response => {
            const pokisets=response.data;
            setSets(pokisets);
          })
          .catch(error => {
            console.error('Error fetching sets:', error);
          });
      }, []);

      return(
        <div className='cardContainer'>
        {sets.map((set, index) =>(  
          <PokieSets pokisets={set} key={set.id}/>
        ))}
      </div>
      );


};

export default AllSets;