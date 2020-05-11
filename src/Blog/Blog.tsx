import React from 'react';
import Body from './Body/Body';
import Header from './Header/Header'

import './Blog.css'

import Container from 'react-bootstrap/Container';
import "./Blog.css"


function Blog() {
  return (
    <Container className="Blog">
        <Header/>
        <Body/>
    </Container>
  );
}

export default Blog;
 