// React imports
import React, { useState, useEffect } from 'react'

// Imports for Bootstrap Grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Data import for pictures
import pictures from '../data/pictures.json';

// Progress bar import from bootstrap
import ProgressBar from 'react-bootstrap/ProgressBar';

// Import for main stylings
import '../main.css'

function SliderPreview() {

    //Timer used for progress bars underneath pictures in slider preview
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (count < 50) {
                setCount((count) => count + 1);
            } else if (count === 50 && count2 < 50) {
                setCount2((count2) => count2 + 1);
            } else if (count2 === 50 && count3 < 50) {
                setCount3((count3) => count3 + 1);
            } else {
                setCount(0)
                setCount2(0)
                setCount3(0)
            }
        }, [100]);
    });

    return (
        <div className='sliderPreviewContainer w-100 justify-content-center'>
            <Container className='w-100 container'>
                <Row>
                    <Col lg={2} className='latestCol'>
                        <h1 className='mainTitle'>Latest</h1>
                    </Col>
                    <Col id='colMargin' className='d-flex my-auto col'>
                        <div className='previewImg me-2'>
                            <img className="sliderPreviewImg" src={pictures[0].image} alt={pictures[0].description} />
                            <ProgressBar
                                animated
                                className='progressBar'
                                min={0}
                                now={count}
                                max={50}
                            />
                        </div>
                        <div className='d-flex flex-column justify-content-between'>
                            <div>
                                <h1 className='title'>SPOTLIGHT</h1>
                                <h2 className='subtitle text-uppercase'>{pictures[0].artist}</h2>
                            </div>
                            <h3 className='view'><a id='footerLink' href="">View</a></h3>
                        </div>
                    </Col>
                    <Col id='colMargin' className='d-flex my-auto col'>
                        <div className='previewImg me-2'>
                            <img className="sliderPreviewImg" src={pictures[1].image} alt={pictures[1].description} />
                            <ProgressBar
                                animated
                                className='progressBar'
                                min={0}
                                now={count2}
                                max={50}
                            />
                        </div>
                        <div className='d-flex flex-column justify-content-between'>
                            <div>
                                <h1 className='title'>SPOTLIGHT</h1>
                                <h2 className='subtitle text-uppercase'>{pictures[1].artist}</h2>
                            </div>
                            <h3 className='view'><a id='footerLink' href="">View</a></h3>
                        </div>
                    </Col>
                    <Col id='colMargin' className='d-flex my-auto col'>
                        <div className='previewImg me-2'>
                            <img className="sliderPreviewImg" src={pictures[2].image} alt={pictures[2].description} />
                            <ProgressBar
                                animated
                                className='progressBar'
                                min={0}
                                now={count3}
                                max={50}
                            />
                        </div>
                        <div className='d-flex flex-column justify-content-between'>
                            <div>
                                <h1 className='title'>SPOTLIGHT</h1>
                                <h2 className='subtitle'>{pictures[2].artist}</h2>
                            </div>
                            <h3 className='view'><a id='footerLink' href="">View</a></h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SliderPreview