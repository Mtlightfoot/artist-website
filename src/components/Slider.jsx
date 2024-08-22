// React Bootstrap imports
import Carousel from 'react-bootstrap/Carousel';

// CSS imports
import '../main.css'

function Slider() {
    return (
        <Carousel controls={false} indicators={false}>
            <Carousel.Item interval={2000}>
                <img
                    className="sliderImg d-block min-vh-90 w-100"
                    src="HeroSlider-1@2x.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="sliderImg d-block min-vh-90 w-100"
                    src="HeroSlider-2@2x.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="sliderImg d-block min-vh-90 w-100"
                    src="HeroSlider-3@2x.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
