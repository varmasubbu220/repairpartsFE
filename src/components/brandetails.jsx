import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';

const BrandDetails = () => {
    const { brandName } = useParams();
    const parts = ['Engine', 'Transmission', 'Brakes', 'Suspension', 'Exhaust', 'Wheels','Belt',"Chasis",'Mirror','Head Lights','Radiator','Tyre'];
    const imageUrl = 'https://media.istockphoto.com/id/1212230930/photo/car-engine-parts.jpg?s=612x612&w=0&k=20&c=YCG4lzjxDYTFQQ-gOniW-r-Xl-th73hBOrcnvdiU274=';

    const handleBuyNow = (part) => {
        alert(`Buying ${part}`);
    };

    const handleAddToCart = (part) => {
        alert(`${part} added to cart`);
    };

    return (<>
        <div className="container mt-4">
            <div className="text-start">
                <p className="h3 mb-3" style={{ fontFamily: 'Georgia, serif', color: '#343a40' }}>
                    <span style={{ color: '#0d6efd' }}>{brandName}</span> Vehicle Parts
                </p>
                <div className="row mt-3">
                    {parts.map((part, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <img src={imageUrl} className="card-img-top" alt="Part" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                                <div className="card-body text-center">
                                    <p className="card-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1em', fontWeight: 'bold' }}>
                                        {part}
                                    </p>
                                    <div className="d-flex justify-content-around">
                                        <button 
                                            className="btn btn-outline-primary btn-sm" 
                                            onClick={() => handleBuyNow(part)}
                                        >
                                            Buy Now
                                        </button>
                                        <button 
                                            className="btn btn-outline-secondary btn-sm" 
                                            onClick={() => handleAddToCart(part)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        
        </div>    <Footer/></>
    );
};

export default BrandDetails;
