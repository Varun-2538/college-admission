import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { scroller } from 'react-scroll';
import image1 from '../assets/1.png';  // Ensure the path to your images is correct

const colleges = [
    { name: "SRM University Chennai", about: "About SRM University Chennai" },
    { name: "SSN College of Engineering", about: "About SSN College of Engineering" },
    { name: "Anna University", about: "About Anna University" },
    { name: "VIT Vellore Chennai", about: "About VIT Vellore Chennai" },
    { name: "Presidency College Chennai", about: "About Presidency College Chennai" },
    { name: "Christ University", about: "About Christ University" },
    { name: "Bangalore University (BU)", about: "About Bangalore University" },
    { name: "Ramaiah Institute of Technology", about: "About Ramaiah Institute of Technology" },
    { name: "R. V. College of Engineering", about: "About R. V. College of Engineering" },
    { name: "Bhusanayana Mukundadas Sreenivasaiah College of Engineering (BMSCE)", about: "About BMSCE" },
    { name: "PES University", about: "About PES University" }
];

const cardsData = colleges.map(college => ({
    collegeImage: image1,
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
        <div style={{ backgroundColor: '#F5F5F5' }}>  {/* Set the background color for the carousel */}
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
