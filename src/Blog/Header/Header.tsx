import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import StickyHeader from './StickyHeader'
import HeaderSketch from './HeaderSketch'

const P5Wrapper = require("react-p5-wrapper");


// function Header() {
//   const [isSticky, setSticky] = useState(false);
//   const ref = useRef(null);
//   const handleScroll = () => {
//     if (ref.current) {
//       setSticky(ref.current.getBoundingClientRect().top <= 0.01*window.screen.height);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', () => handleScroll);
//     };
//   }, []);

//   return (
  //   <div>
  //     <div className="Header" >
  //       waveywaves
  //     </div>
  //     <div className={`stickyHeader${isSticky ? ' sticky' : ''}`} ref={ref}>
  //       <StickyHeader />
  //     </div>
  //  </div>
//   );
// }

class Header extends React.Component {
  render(){
    return (
    <div>
      <div className="Header" >
        waveywaves
      </div>
      <div className="sticky">
        <StickyHeader/> 
      </div>
   </div>
    )
  }
}

export default Header;
