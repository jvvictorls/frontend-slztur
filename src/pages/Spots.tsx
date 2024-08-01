import Card from '../components/Card/card';
import { getSpots } from '../service/requests';
import { useEffect, useState } from 'react';

function Spots() {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    getSpots().then((spots) => setSpots(spots));
  }, []);
  return (
    <div>
      <h2>Spots</h2>
      <Card spot={spots} />
    </div>
  );
}

export default Spots;
