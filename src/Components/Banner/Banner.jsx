import React from 'react';
import './Banner.css';
import Image1 from '../Images/slide1.avif';
import Image2 from '../Images/slide2.avif';
import { Carousel } from "react-bootstrap";

const Banner= () => {
  return (
  
      <Carousel interval={3000}>  
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First banner"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second banner"
        />
     
      </Carousel.Item>

      
    </Carousel>
  );
};

export default Banner;
