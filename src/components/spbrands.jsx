import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Spbrands = () => {
  const brands = ['Audi', 'Skoda', 'Swift', 'Rangerover', 'Toyota', 'Honda', 'Audi', 'Skoda', 'Swift', 'Rangerover', 'Toyota', 'Honda'];
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <div className="container">
        <div className="text-start mt-3">
          <p className="h4 mb-3" style={{ fontFamily: 'cursive', color: '#007bff' }}>
            <span style={{ color: '#0dcaf0' }}>OUR</span> Brands
          </p>
        </div>
        <div className="row justify-content-between pt-3 border rounded">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="col-6 col-md-3 mb-3"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <a href="#" className="text-decoration-none">
                <div 
                  className="card text-center h-100 border-0 shadow-sm" 
                  style={{ 
                    transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)', 
                    transition: 'transform 0.3s' 
                  }}
                >
                  <div className="card-body p-2">
                    <p className="card-text" style={{ fontFamily: 'Arial, sans-serif',color:"grey" ,fontSize: '1em' }}>
                      {brand}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
    
      </div>
    </>
  );
}

export default Spbrands;
