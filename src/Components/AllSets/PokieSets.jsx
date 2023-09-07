import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const PokiSets = ({ pokisets }) => {
    console.log(pokisets);
    return(
        <div className='cardContainerr'>
            <div className="cardTitle"> {pokisets.id} </div>
            <div className="cardBody">
                <p>Name:{pokisets.name}</p>
                <img className='logoSymbol' src={pokisets.logo+".png"} />
                <img className='symbol' src={pokisets.symbol+".png"} />
                <p>Card Count total:{pokisets.cardCount.total } </p>
                <p>Card Count official:{pokisets.cardCount.official } </p>
                <div>
                    <Link to={{pathname:`/SingleSet/${pokisets.id}`}}>
                        <button>View Details</button>
                    </Link>
                </div>
            </div> 
        </div>
    );
};

export default PokiSets;