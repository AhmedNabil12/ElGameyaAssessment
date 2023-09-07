import { Link } from "react-router-dom";

const PokiSerie = ({ pokiserie }) => {
    return(
        <div className='cardContainerr'>
            <div className="cardTitle">{pokiserie.name} {pokiserie.id} </div>
            <div className="cardBody">
            <div>
            <Link to={{pathname: `/SingleSeries/${pokiserie.id}`}}>
                <button >View Details</button>
            </Link>
            </div>
            </div>

        </div>
    );
};

export default PokiSerie;