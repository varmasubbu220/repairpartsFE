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
                    src={one}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={two}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={three}
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                    <h3>Third Slide Label</h3>
                    <p>Third slide description.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default ServiceCarousel;
