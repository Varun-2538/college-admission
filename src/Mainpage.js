// src/MainPage.js
import React from 'react';
import './index.css'; // Ensure Tailwind CSS is imported
import CarouselPage from './pages/CarouselPage'; // Import the CarouselPage component
import FormPage from './pages/FormPage';

const MainPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-college-bg bg-cover bg-center flex flex-col items-center justify-center text-center">
        {/* <h1 className="text-2xl text-white">College Admission</h1>
        <p className="text-lg text-white">Welcome to the College Admission portal.</p> */}
      </div>
      <CarouselPage /> {/* Include the CarouselPage component */}
      <FormPage />
    </div>
  );
};

export default MainPage;
