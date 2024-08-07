// src/pages/CarouselPage.js
import React from 'react';
import "react-multi-carousel/lib/styles.css"; // Import carousel styles
import Carousel from 'react-multi-carousel';
import image1 from '../assets/1.png';

const CarouselPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Check to see if the images are correctly loaded
  const images = [image1, image1, image1, image1];

  return (
    <div className="bg-gray py-12 pb-24 mt-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Colleges
        </h1>
        <div className='mt'>
        <h2 className="text-xl font-medium"> Admission Gateway </h2>
        <h2 className="text-xl font-medium "> Select your College</h2>
        </div>
      </div>
      <Carousel responsive={responsive} infinite autoPlay>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img src={image} alt={`Slide ${index}`} className="w-80 h-96 object-cover rounded-xl mx-auto" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default CarouselPage;
