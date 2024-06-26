import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import one from '../asserts/one.jpg';
import six from '../asserts/six.jpg';
import five from '../asserts/five.jpg';
import roadside from '../asserts/roadside.jpg';

const ServiceCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ objectFit: "cover" }}
                        src={five}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ objectFit: "cover" }}
                        src={one}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ objectFit: "cover" }}
                        src={six}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <img src={roadside} alt="Road Service" style={{ width: '70%', height: 'auto' }} />
                <p style={{ width: '70%', margin: '20px auto' }}><b>No Matter what your vehicle problem is, We will come and fix it anywhere, anytime</b></p>

                <div style={{ width: '70%', margin: '0 auto', marginTop: '2rem', textAlign: 'left' }}>
                    <p>Repair Parts Road Side Assistance Programme is a 24x7 emergency support provided in the event of any mechanical or electrical breakdown and or traffic accident of a vehicle. It is an initiative to increase the HMIL's focus on its customers. The Road Side Assistance Program was launched with the aim of providing emergency road side assistance services round the clock to ensure a pleasurable and uninterrupted journey virtually anywhere in India.</p>
                    <p>The program is designed to enhance the customer ownership experience and ensure that customers get immediate and hassle free service in the event of any breakdown. The scheme will be available as a complimentary service for vehicles within the basic warranty period. The 24×7 Road Side Assistance program covers services such as: wheel change, fuel delivery up to 5 litres, taxi coordination, opening the vehicle in the event of a key lock-out, rectifying electrical problems related to the battery and fuse, on-spot repairs for complaints that can be attended to on site, and car towing to the nearest workshop in cases of an accident or breakdown.</p>
                </div>

                <div style={{ width: '70%', margin: '0 auto', marginTop: '4rem', textAlign: 'left' }}>
                    <h2>Benefits of Road Side Assistance</h2>
                    <ul>
                        <li><b>Break Down/Accident :</b> Roadside repair or vehicle recovery in case of breakdown/road traffic accident.</li>
                        <li><b>Tire Related :</b> Tire punctures-replacement of punctured tire with the spare tire.</li>
                        <li><b>Fuel Related :</b> Out of fuel, incorrect fuel or contaminated fuel.</li>
                        <li><b>Battery Related :</b> Dead battery-jump start.</li>
                        <li><b>Key Related :</b> Locked keys, lost keys or broken vehicle keys.</li>
                    </ul>
                </div>

                <div style={{ width: '70%', margin: '0 auto', marginTop: '4rem', marginBottom: '4rem', textAlign: 'left' }}>
                    <h2>Terms & Conditions</h2>
                    <ul>
                        <li>The service is applicable for the basic warranty period of the vehicle.</li>
                        <li>National Coverage: 24 X 7 assistance across India.</li>
                        <li>The service is applicable for a condition in which the vehicle has been immobile.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default ServiceCarousel;
