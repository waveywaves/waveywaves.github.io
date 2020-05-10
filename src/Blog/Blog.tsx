import React from 'react';

import ListMenu from './ListMenu/ListMenu';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import Body from './Body/Body';
import Header from './Header/Header'

import './Blog.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Blog() {
  return (
    <div>
        <Row>
            <Header/>
        </Row>
        <div  className="Blog">
            <Container fluid="md">
            <Row>
                <Col>
                    <Body/>
                </Col>
            </Row>
            </Container>
        </div>
    </div>
  );
}

export default Blog;
