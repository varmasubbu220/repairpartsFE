import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingpageWrapper from './wrappers/landingpagewrap';
import BrandDetails from './components/brandetails';
import Login from './components/login';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingpageWrapper />} />
          <Route path="/brand/:brandName" element={<BrandDetails/>} /> 
          <Route path='/auth' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  