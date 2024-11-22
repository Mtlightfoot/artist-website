// React import 
import React from 'react'

// Bootstrap imports for styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS styling
import '../main.css'

function Footer() {
    return (
        <div className='footerContainer'>
            <Container className='textBox my-5'>
                <Row className='topRow gx-5'>
                    <Col className='column-2' md={6}>
                        <h1 className='topBoxTagline'>Sign up to our Newsletter</h1>
                        <div className='topBox'>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control titleRight columnTitle" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" />
                                <button className="btn" type="button" id="button-addon2 inputBtn">Subscribe</button>
                            </div>
                        </div>
                    </Col>
                    <Col className='column-1' md={6}>
                        <Row>
                            <Col xs={4} md={4}>
                                <h1 className='topBoxTagline'>Sitemap</h1>
                                <div>
                                    <ul className='footerList'>
                                        <li><a id='footerLink' href="">Artwork</a></li>
                                        <li><a id='footerLink' href="">Artists</a></li>
                                        <li><a id='footerLink' href="">Exhibitions</a></li>
                                        <li><a id='footerLink' href="">Journal</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={4} md={4}>
                                <h1 className='topBoxTagline'>Information</h1>
                                <div>
                                    <ul className='footerList'>
                                        <li><a id='footerLink' href="">About</a></li>
                                        <li><a id='footerLink' href="">Contact</a></li>
                                        <li><a id='footerLink' href="">FAQ</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={4} md={4}>
                                <h1 className='topBoxTagline'>Legal</h1>
                                <div>
                                    <ul className='footerList'>
                                        <li><a id='footerLink' href="">Terms of Use</a></li>
                                        <li><a id='footerLink' href="">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='bottomRow'>
                    <Col xs={6} md={6}>
                        <div className='bottomFooterBox d-flex justify-content-start'>
                            <h2 className='bottomFooterText'>©2020 Acme Co</h2>
                            <h2 className='bottomFooterText'>In / Tw / Fb</h2>
                        </div>

                    </Col>
                    <Col xs={6} md={6} className='text-end'>
                        <h2 className='bottomFooterText text-end'>Made by M. T. Lightfoot</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer