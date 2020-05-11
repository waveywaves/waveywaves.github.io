import React from 'react';
import './Body.css'

import Post from './Post/Post'
import Container from 'react-bootstrap/Container';

function Body() {
  return (
    <Container className="Body">
        <Post/>
        <Post/>
        <Post/>
    </Container>
  );
}

export default Body;
