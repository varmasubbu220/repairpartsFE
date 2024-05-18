import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faBars } from '@fortawesome/free-solid-svg-icons'; // Assuming you have imported the bars icon
import spareslogo from '../asserts/spareslogo.png';
import SearchIcon from '@mui/icons-material/Search';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';

const Desknav = () => {
  const searchList = ["timing Chain", "Gear Rod", "Wheel", "Break Pad"];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let typingTimer;
  
    const typeEffect = () => {
      if (currentIndex === 0) {
        // Reset placeholder to an empty string at the beginning
        setPlaceholder('');
      }
  
      if (currentIndex <= searchList[placeholderIndex].length) {
        // Update placeholder with the current word being typed
        setPlaceholder(prevPlaceholder => searchList[placeholderIndex].slice(0, currentIndex));
        currentIndex++;
        typingTimer = setTimeout(typeEffect, 200);
      } else {
        // Once the word is fully typed, reset placeholder and move to the next word
        setPlaceholder('');
        setPlaceholderIndex(prevIndex => (prevIndex + 1) % searchList.length);
      }
    };
  
    typeEffect();
  
    return () => clearTimeout(typingTimer);
  }, [placeholderIndex]);
  

  return (
    <div className='container-fluid d-flex align-items-center justify-content-between' style={{ 
      background: "linear-gradient(135deg, rgba(160, 222, 255, 1) 0%, rgba(0, 123, 255, 1) 100%)", 
      height: "15vh",
      padding: '0 20px'
    }}>
      <div className='d-flex flex-column align-items-center' style={{ width: "26%", height: '100%' }}>
        <img src={spareslogo} alt="Repair Parts Logo" className='img-fluid' style={{ height: '95%', width: '65%', }} />
        {/* <p className='text-white fs-6 fs-sm-2 fst-italic' style={{ fontFamily: "Jaro",  fontStyle: "normal", }}>
         Repair Parts
        </p> */}
      </div>
      <div className='d-flex align-items-center justify-content-center justify-content-between' style={{ minWidth: "35%", height: '100%' }}>
        <input type='text' className='form-control' placeholder={`Search for  ${placeholder}`} />
        <button type="button" className="btn btn-"><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <div className='d-none d-sm-flex align-items-center justify-content-between' style={{ width: "30%", height: '100%' }}>
        <button type="button" className="btn btn-"><FontAwesomeIcon icon={faHeart} /></button>
        <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
          <button type="button" className="btn btn-primary">Login</button>
        </div>
      </div>
      <div className='d-sm-none'>
        <DensitySmallIcon />
      </div>
    </div>
  );
}

export default Desknav;
