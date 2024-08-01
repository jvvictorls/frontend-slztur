import ISpot from '../../interfaces/ISpot';
import './card.css';

type CardProps = {
  spot: ISpot[];
};

function Card({ spot }: CardProps) {
  return (
    <div className="container">
      {spot.map((spot) => (
        <div className="card" key={spot.id}>
          <div className="title">
            <h2>{spot.name}</h2>
          </div>
          <img src={spot.image} alt={spot.name} />
          <div className="infos">
            <div className="city">
              <h3>Cidade</h3>
              <p>{spot.city}</p>
            </div>
            <div className="type">
              <h3>Tipo:</h3>
              <p>{spot.type}</p>
            </div>
            <div className="tips">
              <h3>Dicas:</h3>
              <p>{spot.tips}</p>
            </div>
          </div>
          <div className="button">
            <button>
              <a href={`/spots/${spot.id}`}>Ver mais</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
