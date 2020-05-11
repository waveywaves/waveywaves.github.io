import React, { Fragment, useEffect, useRef, useState } from 'react';
import './Header.css';
import StickyHeader from './StickyHeader'
import Container from 'react-bootstrap/Container';

function Header() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0.01*window.screen.height);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Container>
      <div className="Header" >
        waveywaves
      </div>
      <div className={`stickyHeader${isSticky ? ' sticky' : ''}`} ref={ref}>
        <StickyHeader />
      </div>
   </Container>
  );
}

export default Header;
