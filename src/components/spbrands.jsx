// src/SpBrands.js
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SpBrands = () => {
    const brands = ['Audi', 'Skoda', 'Swift', 'Rangerover', 'Toyota', 'Honda', 'Audi', 'Skoda', 'Swift', 'Rangerover', 'Toyota', 'Honda'];
    const [hoveredCard, setHoveredCard] = useState(null);
    const history = useNavigate();

    const handleCardClick = (brand) => {
        history(`/brand/${brand}`);
    };

    return (
        <div className="container">
            <div className="text-start mt-3">
                <p className="h4 mb-3" style={{ fontFamily: 'cursive', color: '#007bff' }}>
                    <span style={{ color: '#0dcaf0' }}>Popular</span> Brands
                </p>
            </div>
            <div className="row justify-content-between pt-3 border rounded">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="col-6 col-md-3 mb-3"
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => handleCardClick(brand)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div
                            className="card text-center h-100 border-0 shadow-sm"
                            style={{
                                transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                                transition: 'transform 0.3s',
                                backgroundColor: hoveredCard === index ? 'rgb(0, 123, 255)' : '',
                                color: hoveredCard === index ? 'white' : 'grey'
                            }}
                        >
                            <div className="card-body p-2">
                                <p className="card-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1em' }}>
                                    {brand}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpBrands;
