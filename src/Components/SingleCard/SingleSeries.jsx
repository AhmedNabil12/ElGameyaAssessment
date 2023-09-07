import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SingleSeries() {
    const param = useParams();
    console.log(param);

  const [singleSeries, setSingleSeries] = useState([]);

    useEffect(() => {
      axios.get (`https://api.tcgdex.net/v2/en/series/${param.id}`)
        .then(response => {
            setSingleSeries(response.data);
        })
        .catch(error => {
          console.error('Error fetching series:', error);
        });
    }, [param.id]);

return (
  <div>
  <h2>Single Series</h2>
  <p>Name: {singleSeries.name}</p>
  <p>ID: {param.id}</p>
  <img className='logoSymbol' src={singleSeries.logo+".png"}/>
  



</div>
  );
}

export default SingleSeries;
