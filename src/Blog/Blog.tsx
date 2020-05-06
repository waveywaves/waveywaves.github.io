import React from 'react';
import ListMenu from './ListMenu/ListMenu';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import Body from './Body/Body';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Blog() {
  return (
    <Container fluid="md" className="Blog">
        <Row>
            <Col>
                <ListMenu/>
            </Col>
            <Col>
                <Body/>
            </Col>
            <Col>
                <NavigationMenu/>
            </Col>
        </Row>
    </Container>
  );
}

export default Blog;
