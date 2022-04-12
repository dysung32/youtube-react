// src/App.js
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';
// import youtubeData from './data/youtubeData.json';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/subscription' element={<Subscription />} />
    </Routes>
  );
}

export default App;