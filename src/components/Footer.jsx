import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS styling
import '../main.css'

function Footer() {
    return (
        <div className='footerContainer'>
            <Container className='textBox my-5'>
                <Row className='topRow gx-5 mx-5'>
                    <Col className='column-2' md={6}>
                        <h1 className='topBoxTagline'>Sign up to our Newsletter</h1>
                        <div className='topBox'>
                            <h1 className='titleRight columnTitle'>Email Address</h1>
                            <h2 className='columnFooterText'>Subscribe</h2>
                        </div>
                    </Col>
                    <Col className='column-1' md={6}>
                        <Row>
                            <Col xs={4} md={4}>
                                <h1 className='topBoxTagline'>Sitemap</h1>
                                <div>
                                    <ul className='footerList'>
                                        <li>Artwork</li>
                                        <li>Artists</li>
                                        <li>Exhibitions</li>
                                        <li>Journal</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={4} md={4}>
                                <h1 className='topBoxTagline'>Information</h1>
                                <div>
                                    <ul className='footerList'>
                                        <li>About</li>
                                        <li>Contact</li>
                                        <li>FAQ</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={4} md={4}>
                                <h1 className='topBoxTagline'>Legal</h1>
                                <div>
                                    <ul className='footerList'>
                                        <li>Terms of Use</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='bottomRow mx-5'>
                    <Col xs={6} md={6}>
                        <div className='bottomFooterBox d-flex justify-content-start'>
                            <h2 className='bottomFooterText'>©2020 Acme Co</h2>
                            <h2 className='bottomFooterText'>In / Tw / Fb</h2>
                        </div>

                    </Col>
                    <Col xs={6} md={6} className='text-end'>
                        <h2 className='bottomFooterText text-end'>Made by Six</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer