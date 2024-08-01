import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Spots from './pages/Spots';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/spots" element={<Spots />} />
      </Route>
    </Routes>
  );
}

export default App;
