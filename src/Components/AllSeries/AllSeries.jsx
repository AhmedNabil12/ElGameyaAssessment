import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokiSerie from './PokiSerie'

const AllSeries = () => {
  const [series, AllSeries] = useState([]);

  useEffect(() => {
    axios.get("https://api.tcgdex.net/v2/en/series")
      .then(response => {
        const pokiserie=response.data;
        AllSeries(pokiserie);
      })
      .catch(error => {
        console.error('Error fetching series:', error);
      });
  }, []);
  
  console.log(series);

  return (
    <div className='cardContainer'>
      {series.map((serie, index) =>(  
        <PokiSerie pokiserie={serie} key={serie.id}/>
      ))}
    </div>
  );
};

export default AllSeries;
