import React from 'react';
import './Header.css';
import StickyHeader from './StickyHeader'
import HeaderSketch from './HeaderSketch'

class Header extends React.Component {

  state = {
    isSticky: false
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isSticky = Math.round(window.scrollY) >= 100;
      if (isSticky !== this.state.isSticky) {
          this.setState({ isSticky })
      }
    });
  }

  render(){
    return (
    <div>
      <div className="Header" >
        <HeaderSketch/>
        waveywaves
      </div>
      <div className={this.state.isSticky ? 'sticky' : 'stickyHeader'}>
        <StickyHeader/> 
      </div>
   </div>
    )
  }
}

export default Header;
