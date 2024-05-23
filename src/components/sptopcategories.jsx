import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Carousel } from 'react-bootstrap';

const SpTopCategories = () => {
  const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEv5aBfQgq7h39_P_mrzHsx3laKylNn52bGJSQeus7A&s';
  const Spcat = [
    { item: "brake", img: defaultImage },
    { item: "chain", img: "https://bd.gaadicdn.com/upload/userfiles/images/7a74f5df462c3098d1d72bfa7ea9a26a.jpg?impolicy=resize&imwidth=420" },
    { item: "steering", img: "https://images.news18.com/ibnlive/uploads/2021/04/1618906559_audi-a7l-8.png" },
    { item: "suspensions", img: "https://stapletonmotors.wordpress.com/wp-content/uploads/2015/01/autosuspension.jpg" },
    { item: "horns", img: "https://tiimg.tistatic.com/fp/1/007/499/red-black-color-round-shape-universal-car-jeep-electric-tone-horn-12v-007.jpg" },
    { item: "tyre", img: "https://e7.pngegg.com/pngimages/422/506/png-clipart-vehicle-tire-set-illustration-tyres-tools-and-parts-tyres.png" },
    { item: "clutch", img: "https://tiimg.tistatic.com/fp/1/007/736/corrosion-free-clutch-assembly-hornet-for-biike-spare-parts-packaging-295.jpg" },
    { item: "brake", img: "https://www.frontechchina.com/wp-content/uploads/2019/06/pad-kit.jpg" }
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
      return chunkArray(Spcat, 4);
    } else if (screenWidth >= 992) {
      return chunkArray(Spcat, 3);
    } else if (screenWidth >= 768) {
      return chunkArray(Spcat, 2);
    } else {
      return chunkArray(Spcat, 1);
    }
  };

  const [cardChunks, setCardChunks] = useState(getChunks());

  useEffect(() => {
    const handleResize = () => setCardChunks(getChunks());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mt-4">
      <div className="text-start mt-3">
        <p className="h4 mb-3" style={{ fontFamily: 'cursive', color: '#007bff' }}>
          <span style={{ color: '#0dcaf0' }}>Pick by</span> Category
        </p>
      </div>
      <Carousel>
        {cardChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              {chunk.map((category, idx) => (
                <div key={idx} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                  <div className="h-100 text-center rounded">
                    <img src={category.img} className="card-img-top rounded-circle mx-auto d-block mt-3" alt={category.item} style={{ width: '100px', height: '100px' }} />
                    <div className="card-body">
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
