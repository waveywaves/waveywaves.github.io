import React, { Fragment, useEffect, useRef, useState } from 'react';
import './Header.css';
import Col from 'react-bootstrap/Col';

function StickyHeader() {
  return (
    <div className="stickyHeaderInner">
          <a>
            waveywaves
          </a>
          <a>
            • Work 
          </a>
          <a>
            • Play
          </a>
          <a>
            • Info 
          </a>
    </div>
  );
}

export default StickyHeader;
