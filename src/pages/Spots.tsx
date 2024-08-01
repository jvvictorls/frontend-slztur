import Card from '../components/card';
import { getSpots } from '../service/requests';
import { useEffect, useState } from 'react';

function Spots() {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    getSpots().then((spots) => setSpots(spots));
  }, []);
  return (
    <div>
      <h1>Spots</h1>
      <Card spot={spots} />
    </div>
  );
}

export default Spots;
