import React from 'react';
import './Header.css';

class StickyHeader extends React.Component {
  render() {
    return (
      <div className="stickyHeaderInner">
            <a href="https://waveywaves.github.io">
              waveywaves
            </a>
            <a href="https://waveywaves.github.io">
              • Work 
            </a>
            <a href="https://waveywaves.github.io">
              • Play
            </a>
            <a href="https://waveywaves.github.io">
              • Info 
            </a>
      </div>
    );
  }
  
}

export default StickyHeader;
