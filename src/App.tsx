import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Spots from './pages/Spots';
import SpotDetails from './pages/SpotDetails';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/spots" element={<Spots />} />
        <Route path="/spots/:id" element={<SpotDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
