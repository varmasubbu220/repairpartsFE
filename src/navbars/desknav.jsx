import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import spareslogo from '../asserts/NavRParts.png';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { useNavigate } from 'react-router-dom';

const Desknav = () => {
  const searchList = ["timing Chain", "Gear Rod", "Wheel", "Break Pad"];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState("");
  const [show, setShow] = useState(false); 
const navigate=useNavigate()
  useEffect(() => {
    let currentIndex = 0;
    let typingTimer;

    const typeEffect = () => {
      if (currentIndex === 0) {
        setPlaceholder('');
      }

      if (currentIndex <= searchList[placeholderIndex].length) {
        setPlaceholder(prevPlaceholder => searchList[placeholderIndex].slice(0, currentIndex));
        currentIndex++; 
        typingTimer = setTimeout(typeEffect, 200);
      } else {
        setPlaceholder('');
        setPlaceholderIndex(prevIndex => (prevIndex + 1) % searchList.length);
      }
    };

    typeEffect();

    return () => clearTimeout(typingTimer);
  }, [placeholderIndex]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='container-fluid d-flex align-items-center justify-content-between' style={{ 
        background: "linear-gradient(135deg, rgba(160, 222, 255, 1) 0%, rgba(0, 123, 255, 1) 100%)", 
        height: "15vh",
        padding: '0 20px'
      }}>
    <div className='d-flex flex-column align-items-center' style={{ width: "20%", height: '15vh' }}>
    <img src={spareslogo} alt="Repair Parts Logo" className='img-fluid' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
     </div>

        <div className='d-none d-lg-flex align-items-center justify-content-center' style={{ minWidth: "35%", height: '100%' }}>
          <input type='text' className='form-control' placeholder={`Search for ${placeholder}`} />
          <button type="button" className="btn btn-"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
        <div className='d-none d-lg-flex align-items-center justify-content-between' style={{ width: "30%", height: '100%' }}>
          <button type="button" className="btn btn-"><FontAwesomeIcon icon={faHeart} /></button>
          <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
            <button type="button" className="btn btn-primary" onClick={()=>navigate('/auth')}>Login</button>
          </div>
        </div>
        <div className='d-lg-none'>
          <DensitySmallIcon onClick={handleShow} />
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end" className="d-lg-none" style={{ background: "rgba(0, 123, 255, 0.9)" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/wishlist" className="text-white">Wishlist</Nav.Link>
            <Nav.Link href="/my-orders" className="text-white">My Orders</Nav.Link>
            <Button variant="primary" className="mt-3" onClick={()=>navigate('/auth')}>Login</Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Desknav;
