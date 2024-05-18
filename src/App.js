import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingpageWrapper from './wrappers/landingpagewrap';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingpageWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
