// React Bootstrap imports
import Carousel from 'react-bootstrap/Carousel';
import pictures from '../data/pictures.json'

// CSS imports
import '../main.css'

function Slider() {

    return (
        <Carousel id='carouselMain' controls={false} indicators={false} touch={false} pause={false}>
            <Carousel.Item data={1} interval={5000}>
                <div className='sliderImgBg sliderImg1'>
                    <img
                        className="sliderImg1 sliderImg d-block min-vh-90 w-100"
                        src={pictures[0].image}
                        alt={pictures[0].description}
                    />
                </div>
                <Carousel.Caption className='carouselCaption h-100 align-items-start justify-content-center'>
                    <h3 className='carouselText'>Artist Spotlight</h3>
                    <h4 className='carouselArtist'>{pictures[0].artist}</h4>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <div className='sliderImgBg'>
                    <img
                        className="sliderImg d-block min-vh-90 w-100"
                        src={pictures[1].image}
                        alt={pictures[1].description}
                    />
                </div>
                <Carousel.Caption className='carouselCaption h-100 align-items-start justify-content-center'>
                    <h3 className='carouselText'>Artist Spotlight</h3>
                    <h4 className='carouselArtist'>{pictures[1].artist}</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <div className='sliderImgBg'>
                    <img
                        className="sliderImg d-block min-vh-90 w-100"
                        src={pictures[2].image}
                        alt={pictures[2].description}
                    />
                </div>
                <Carousel.Caption className='carouselCaption h-100 align-items-start justify-content-center'>
                    <h3 className='carouselText'>Artist Spotlight</h3>
                    <h4 className='carouselArtist'>{pictures[2].artist}</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
