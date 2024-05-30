import React, { useState } from 'react';
import { Nav, Navbar, Button, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import servicelogo from '../asserts/servicelogo.png';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import spareslogo from '../asserts/NavRParts.png';
import { useNavigate } from 'react-router-dom';
const ServiceNav = () => {
  const [show, setShow] = useState(false);
  const navigate=useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" style={{ 
        background: "linear-gradient(135deg, rgba(160, 222, 255, 1) 0%, rgba(0, 123, 255, 1) 100%)", 
        height: "15vh",
        padding: '0 20px'
      }}>
        <Navbar.Brand href="/" className="d-flex align-items-center" style={{ width: "26%", height: '100%' }}>
          <img src={spareslogo} alt="Repair Parts Logo" className='img-fluid' style={{ height: '95%', width: '65%' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} className="d-lg-none">
          <DensitySmallIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between d-none d-lg-flex">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/services" className="text-white">Services</Nav.Link>
            <Nav.Link href="/become-a-member" className="text-white">Become a Member</Nav.Link>
            <Nav.Link href="/request-a-service" className="text-white">Request a Service</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Button variant="primary" onClick={()=>navigate('/auth')}>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end" className="d-lg-none" style={{ background: "rgba(0, 123, 255, 0.9)" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/services" className="text-white">Services</Nav.Link>
            <Nav.Link href="/become-a-member" className="text-white">Become a Member</Nav.Link>
            <Nav.Link href="/request-a-service" className="text-white">Request a Service</Nav.Link>
            <Button variant="primary" className="mt-3" onClick={()=>navigate('/auth')}>Login</Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ServiceNav;
