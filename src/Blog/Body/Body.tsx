import React from 'react';
import './Body.css'

import Post from './Post/Post'

function Body() {
  return (
    <div className="Body">
        <Post/>
        <Post/>
        <Post/>
    </div>
  );
}

export default Body;
