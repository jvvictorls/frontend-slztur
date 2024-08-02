import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ISpot from '../interfaces/ISpot';
import { getSpotById } from '../service/requests';
import '../styles/spotDetails.css';

function SpotDetails() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<ISpot | null>({} as ISpot | null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return navigate('/spots');
    getSpotById(id).then((spot) => setData(spot));
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="spot-details">
      <img src={data.image} alt={data.name} />
      <div className="spot-content">
        <div className="text-content">
          <div className="spot-title">
            <h2>{data.name}</h2>
          </div>
          <div className="description">
            <p>{data.description}</p>
          </div>
          <div className="spot-city">
            <h3>Cidade</h3>
            <p>{data.city}</p>
          </div>
          <div className="spot-type">
            <h3>Tipo:</h3>
            <p>{data.type}</p>
          </div>
          <div className="spot-tips">
            <h3>Dicas:</h3>
            <p>{data.tips}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotDetails;
