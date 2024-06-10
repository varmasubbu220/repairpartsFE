import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingpageWrapper from './wrappers/landingpagewrap';
import BrandDetails from './components/brandetails';
import Login from './components/login';
import CategoryDetail from './components/categorydetails';
import Aboutpage from './components/about';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingpageWrapper />} />
          <Route path="/brand/:brandName" element={<BrandDetails/>} /> 
          <Route path='/auth' element={<Login/>}/>
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path="/category/:category" element={<CategoryDetail />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  