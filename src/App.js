import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingpageWrapper from './wrappers/landingpagewrap';
import BrandDetails from './components/brandetails';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingpageWrapper />} />
          <Route path="/brand/:brandName" element={<BrandDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
