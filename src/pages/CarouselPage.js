import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { scroller } from 'react-scroll';
import image1 from '../assets/1.png';
import image2 from '../assets/images 1.png';
import image3 from '../assets/images 2.png';
import image4 from '../assets/images 3.png';
import image5 from '../assets/images 4.png';
import image6 from '../assets/i4.png';
import image7 from '../assets/i 5.png';
import image8 from '../assets/i 6.png';
import image9 from '../assets/i 7.png';
import image10 from '../assets/i 8.png';
import image11 from '../assets/i 9.png';

const colleges = [
    { name: "SRM University Chennai", about: "About SRM University Chennai", image: image1 },
    { name: "SSN College of Engineering", about: "About SSN College of Engineering", image: image6 },
    { name: "Anna University", about: "About Anna University", image: image5 },
    { name: "VIT Vellore Chennai", about: "About VIT Vellore Chennai", image: image7 },
    { name: "Presidency College Chennai", about: "About Presidency College Chennai", image: image9 },
    { name: "Christ University", about: "About Christ University", image: image10 },
    { name: "Bangalore University (BU)", about: "About Bangalore University", image: image11 },
    { name: "Ramaiah Institute of Technology", about: "About Ramaiah Institute of Technology", image: image2 },
    { name: "R. V. College of Engineering", about: "About R. V. College of Engineering", image: image3 },
    { name: "BMS College of Engineering (BMSCE)", about: "About BMSCE", image: image4 },
    { name: "PES University", about: "About PES University", image: image8 }
];

const cardsData = colleges.map(college => ({
    collegeImage: college.image,
    collegeName: college.name,
    frontContent: college.about,
    backContent: `Learn more about ${college.name}`
}));

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CarouselPage = () => {
    const [flippedIndexes, setFlippedIndexes] = useState([]);

    const handleFlip = (index, event) => {
        event.stopPropagation();
        setFlippedIndexes(prevIndexes =>
            prevIndexes.includes(index) ? prevIndexes.filter(i => i !== index) : [...prevIndexes, index]
        );
    };

    const handleRegisterClick = () => {
        scroller.scrollTo('formPage', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <Carousel responsive={responsive} infinite={true} autoPlay={false} autoPlaySpeed={3000} keyBoardControl={true} swipeable={true} draggable={true}>
                {cardsData.map((card, index) => (
                    <div key={index} className="card-container p-4 flex justify-center">
                        <div className={`card ${flippedIndexes.includes(index) ? 'flipped' : ''}`} 
                            style={{ width: '400px', height: '600px', transformStyle: 'preserve-3d', backgroundColor: '#E3E3E3' }}>
                            <div className="front p-4 flex flex-col items-center justify-start" style={{ backfaceVisibility: 'hidden', position: 'absolute', width: '100%', height: '100%' }}>
                                <img src={card.collegeImage} alt={card.collegeName} className="w-full h-2/3 object-cover rounded-t-lg"/>
                                <h3 className="text-lg font-bold mt-2">{card.collegeName}</h3>
                                <div className="mt-auto flex w-full justify-around p-4">
                                    <button className="bg-green-300 p-2 flex-1 mr-2" style={{ backgroundColor: '#FEFEFA' }} onClick={(e) => handleFlip(index, e)}>About</button>
                                    <button className="bg-blue-300 p-2 flex-1" style={{ backgroundColor: '#F0FFFF' }} onClick={handleRegisterClick}>Register</button>
                                </div>
                            </div>
                            <div className="back p-4 flex flex-col items-center justify-center text-white" 
                                style={{ 
                                    backfaceVisibility: 'hidden', 
                                    transform: 'rotateY(180deg)', 
                                    position: 'absolute', 
                                    width: '100%', 
                                    height: '100%', 
                                    backgroundColor: '#D3D3D3'
                                }}
                                onClick={(e) => handleFlip(index, e)}>
                                <p>{card.backContent}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselPage;
