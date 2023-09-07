import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SingleSet() {
    const param = useParams();
    console.log(param);

  const [singleSet, setSingleSet] = useState([]);

    useEffect(() => {
      axios.get (`https://api.tcgdex.net/v2/en/sets/${param.id}`)
        .then(response => {
          setSingleSet(response.data);
        })
        .catch(error => {
          console.error('Error fetching set:', error);
        });
    }, [param.id]);

return (
  <div>
  <h2>Single Set</h2>
  <p>Name: {singleSet.name}</p>
  <p>ID: {param.id}</p>
  <img className='logoSymbol' src={singleSet.logo+".png"}  />
  <br />
  <img className='symbol' src={singleSet.symbol+".png"}  />
 
  <p>Card Count:</p>
<ul>
  {singleSet.cardCount &&
    Object.keys(singleSet.cardCount).map((key) => (
      <li key={key}>
        {key}: {singleSet.cardCount[key]}
      </li>
    ))}
</ul>

<p>Serie:</p>
<ul>
  {singleSet.serie &&
    Object.keys(singleSet.serie).map((key) => (
      <li key={key}>
        {key}: {singleSet.serie[key]}
      </li>
    ))}
</ul>


<p>tcgOnline:</p>
<ul>
  {singleSet.tcgOnline &&
    Object.keys(singleSet.tcgOnline).map((key) => (
      <li key={key}>
        {key}: {singleSet.tcgOnline[key]}
      </li>
    ))}
</ul>


<p>Legal:</p>
<ul>
  {singleSet.legal &&
    Object.keys(singleSet.legal).map((key) => (
      <li key={key}>
        {key}: {singleSet.legal[key]}
      </li>
    ))}
</ul>




  
</div>
  );
}

export default SingleSet;
