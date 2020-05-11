import React from 'react';
import Body from './Body/Body';
import Header from './Header/Header'

import './Blog.css'

import Container from 'react-bootstrap/Container';


function Blog() {
  return (
    <Container>
        <Header/>
        <Body/>
    </Container>
  );
}

export default Blog;
