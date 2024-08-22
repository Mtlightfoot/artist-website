import React from 'react'

// Imports for Bootstrap Grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Data import for pictures
import pictures from '../data/pictures.json';

// Imports for progress bar from react bootstrap
import ProgressBar from 'react-bootstrap/ProgressBar';

import '../main.css'

function SliderPreview() {
    return (
        <div className='sliderPreviewContainer w-100 justify-content-center'>
            <Container className='w-100 container'>
                <Row>
                    <Col className='latestCol'>
                        <h1 className='mainTitle'>Latest</h1>
                    </Col>
                    <Col className='d-flex my-auto col'>
                        <div className='previewImg me-2'>
                            <img className="sliderPreviewImg" src="./HeroSlider-1@2x.jpg" alt="" />
                            <ProgressBar className='progressBar' min={0} now={50} max={100} />
                        </div>
                        <div className='d-flex flex-column justify-content-between'>
                            <div>
                                <h1 className='title'>SPOTLIGHT</h1>
                                <h2 className='subtitle text-uppercase'>{pictures[0].artist}</h2>
                            </div>
                            <h3 className='view'>View</h3>
                        </div>
                    </Col>
                    <Col className='d-flex my-auto col'>
                        <div className='previewImg me-2'>
                            <img className="sliderPreviewImg" src="./HeroSlider-2@2x.jpg" alt="" />
                            <ProgressBar className='progressBar' min={0} now={50} max={100} />
                        </div>
                        <div className='d-flex flex-column justify-content-between'>
                            <div>
                                <h1 className='title'>SPOTLIGHT</h1>
                                <h2 className='subtitle text-uppercase'>{pictures[1].artist}</h2>
                            </div>
                            <h3 className='view'>View</h3>
                        </div>
                    </Col>
                    <Col className='d-flex my-auto col'>
                        <div className='previewImg me-2'>
                            <img className="sliderPreviewImg" src="./HeroSlider-3@2x.jpg" alt="" />
                            <ProgressBar className='progressBar' min={0} now={50} max={100} />
                        </div>
                        <div className='d-flex flex-column justify-content-between'>
                            <div>
                                <h1 className='title'>SPOTLIGHT</h1>
                                <h2 className='subtitle'>{pictures[2].artist}</h2>
                            </div>
                            <h3 className='view'>View</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SliderPreview