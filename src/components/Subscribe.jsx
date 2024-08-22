import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS styling
import '../main.css'

function Subscribe() {
    return (
        <div className='subscribeContainer'>
            <Container className='textBox'>
                <Row>
                    <Col className='column-1' md={6}>
                        <h1 className='leftTitle columnTitle'>Subscribe to our News</h1>
                    </Col>
                    <Col className='column-2' md={6}>
                        <div className='topBox'>
                            <h1 className='titleRight columnTitle'>Email Address</h1>
                            <h2 className='columnSubscribeText'>Subscribe</h2>
                        </div>
                        <h2 className='consentText'>You are consenting to Acme Co storing your personal information (email address)</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Subscribe