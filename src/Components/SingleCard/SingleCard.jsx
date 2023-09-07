import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SingleCard() {
    const param = useParams();
    console.log(param);

  const [single, setSingle] = useState([]);

    useEffect(() => {
      axios.get(`https://api.tcgdex.net/v2/en/cards/${param.localId}`)
        .then(response => {
          setSingle(response.data);
        })
        .catch(error => {
          console.error('Error fetching cards:', error);
        });
    }, []);

return (
  <div>
  <h2>Card Details</h2>
  <p>Name: {single.name}</p>
  <p>Local ID: {param.localId}</p>
  <p>ID: {single.id}</p>
  <img className='singleCardImg' src={single.image+"/high.png"} />
  <p>Category: {single.category}</p>
  <p>Illustrator: {single.illustrator}</p>
  <p>Rarity: {single.rarity}</p>

  <p>Variants:</p>
  <ul>
  {single.variants &&
    Object.keys(single.variants).map((key) => (
      <li key={key}>
        {key}: {single.variants[key]}
      </li>
    ))}
  </ul>
  
  <p>dexId: {single.dexId}</p>
  <p>HP: {single.hp}</p>

  <p>Types:</p>
  <ul>
  {single.types &&
    Object.keys(single.types).map((key) => (
      <li key={key}>
        {key}: {single.types[key]}
      </li>
    ))}
  </ul>

  <p>Evolve From: {single.evolveFrom}</p>
  <p>Description: {single.description}</p>
  <p>Level: {single.length}</p>
  <p>Stage: {single.stage}</p>
  <p>Suffix: {single.suffix}</p>

<p>Item:</p>
  <ul>
  {single.item &&
    Object.keys(single.item).map((key) => (
      <li key={key}>
        {key}: {single.item[key]}
      </li>
    ))}
  </ul>

</div>
  );
}

export default SingleCard;
