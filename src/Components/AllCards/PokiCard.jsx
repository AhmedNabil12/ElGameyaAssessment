import { Link } from "react-router-dom";

const PokiCard = ({ pokiData }) => {
    return(
        <div className='cardContainerr'>
            <div className="cardTitle">{pokiData.name} {pokiData.id} </div>
            <div className="cardBody">
                <div className="cardImage">
                   {pokiData.image ? ( 
                        <img src={pokiData.image+"/high.png"} alt={pokiData.name} />
                    ):(
                        <p>No Image Available </p>
                    )}
                </div>
                <div>
                <Link to={{pathname: `/SingleCard/${pokiData.localId}`}}>
                    <button >View Details</button>
                </Link>

                </div>
            </div>
        </div>
    );
};

export default PokiCard;