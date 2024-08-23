// React import
import React from 'react'

// Bootstrap imports for styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ArtworkGrid() {
    
    return (
        <Container className='artWorkContainer'>
            <Row className='artWorkRow'>
                <Col className='artWorkFeature' xs={11} sm={11} lg={6}>
                    <div className='artWorkTitleBox'>
                        <h1 className='artWorkTitle'>Featured</h1>
                        <h2 className='artworkSubtitle'>Photography</h2>
                    </div>
                </Col>
                <Col xs={6} sm={6} lg={3}>
                    <div className='artWorkPictureDiv'>
                        <img className='artWorkPicture' src="./ArtworkGrid-2@2x.jpg" alt="" />
                        <div className='carouselTextBox'>
                            <h1>KOURTNEY ROY</h1>
                            <h2>Ilulissat 03, 2014</h2>
                            <h3>£5000</h3>
                        </div>
                    </div>
                    <div className='artWorkPictureDiv'>
                        <img className='artWorkPicture' src="./ArtworkGrid-4@2x.jpg" alt="" />
                        <div className='carouselTextBox'>
                            <h1>OLAF OTTO BECKER</h1>
                            <h2>Chicago, 1976</h2>
                            <h3>£5000</h3>
                        </div>
                    </div>                </Col>
                <Col xs={6} sm={6} lg={3}>
                    <div className='artWorkPictureDiv'>
                        <img className='artWorkPicture' src="./ArtworkGrid-3@2x.jpg" alt="" />
                        <div className='carouselTextBox'>
                            <h1>KOURTNEY ROY</h1>
                            <h2>Ilulissat 03, 2014</h2>
                            <h3>£5000</h3>
                        </div>
                    </div>
                    <div className='artWorkPictureDiv'>
                        <img className='artWorkPicture' src="./ArtworkGrid-5@2x.jpg" alt="" />
                        <div className='carouselTextBox'>
                            <h1>OLAF OTTO BECKER</h1>
                            <h2>Chicago, 1976</h2>
                            <h3>£5000</h3>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ArtworkGrid