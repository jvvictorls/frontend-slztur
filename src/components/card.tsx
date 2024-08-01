import ISpot from '../interfaces/ISpot';

type CardProps = {
  spot: ISpot[];
};

function Card({ spot }: CardProps) {
  return (
    <div>
      {spot.map((spot) => (
        <div key={spot.id}>
          <h2>{spot.name}</h2>
          <p>{spot.description}</p>
          <p>{spot.city}</p>
          <p>{spot.tips}</p>
          <p>{spot.type}</p>
          <img src={spot.image} alt={spot.name} />
        </div>
      ))}
    </div>
  );
}

export default Card;
