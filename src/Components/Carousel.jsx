import React from 'react';
import '../Styles/Carousel.css';
import AliceCarousel from 'react-alice-carousel';

const Carousel = () => (
  <div className="carousel">
    <AliceCarousel
      duration={400}
      autoPlay
      startIndex={1}
      fadeOutAnimation
      mouseDragEnabled
      playButtonEnabled
      autoPlayInterval={2000}
    >
      <img src="#img" className="yours-custom-class" alt="img" />
      <img src="#img2" className="yours-custom-class" alt="img" />
      <img src="/img3" className="yours-custom-class" alt="img" />
      <img src="/img4" className="yours-custom-class" alt="img" />
      <img src="/img5" className="yours-custom-class" alt="img" />
    </AliceCarousel>
  </div>
);

export default Carousel;
