import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import one from '../asserts/one.jpg';
import two from '../asserts/two.jpg';
import three from '../asserts/three.jpg';

const ServiceCarousel = () => {

    return (
      <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                  style={{height:"72vh",objectFit:"cover"}}
                    src={one}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={two}
                    style={{height:"72vh",objectFit:"cover"}}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={three}
                    style={{height:"72vh",objectFit:"cover"}}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}
export default ServiceCarousel;
