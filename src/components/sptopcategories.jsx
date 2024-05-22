import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Carousel } from 'react-bootstrap';

const SpTopCategories = () => {
  let link = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEv5aBfQgq7h39_P_mrzHsx3laKylNn52bGJSQeus7A&s';
  const Spcat = [
    { item: "brake", img: link },
    { item: "chain", img: link },
    { item: "handle", img: link },
    { item: "suspensions", img: link },
    { item: "horns", img: link },
    { item: "tyre", img: link }
  ];

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const getChunks = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return chunkArray(Spcat, 4); // 4 cards per slide for large screens
    } else if (screenWidth >= 992) {
      return chunkArray(Spcat, 3); // 3 cards per slide for medium screens
    } else if (screenWidth >= 768) {
      return chunkArray(Spcat, 2); // 2 cards per slide for small screens
    } else {
      return chunkArray(Spcat, 1); // 1 card per slide for extra small screens
    }
  };

  const cardChunks = getChunks();

  return (
    <div className="container mt-4">
      <Carousel>
        {cardChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="row" >
              {chunk.map((category, idx) => (
                <div key={idx} className="col-md-3 mb-3">
                  <div className="h-100 text-center rounded">
                    <img src={category.img} className="card-img-top rounded-circle mx-auto d-block mt-3" alt={category.item} style={{ width: '100px', height: '100px' }} />
                    <div className="card-body mb-3">
                      <h5 className="card-title">{category.item}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SpTopCategories;
