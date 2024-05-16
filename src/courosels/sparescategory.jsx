import React from 'react';

const SparesByCategories = () => {
  
    const Card = () => {
        return (
            <div className="card .bg-light" style={{ width: '18rem', height: '35vh', margin: '10px' }}>
               sxs
                
            </div>
        );
    }

    return (
        <div className="bg-primary">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-around">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-around">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default SparesByCategories;
