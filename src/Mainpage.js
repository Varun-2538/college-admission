import React from 'react';
import './index.css'; // Ensure Tailwind CSS is imported
import CarouselPage from './pages/CarouselPage'; // Import the CarouselPage component
import FormPage from './pages/FormPage';
import CoursesPage from './components/CoursePage'; // Import the CoursesPage component
import Navbar from './components/Navbar'; // Import Navbar component

const MainPage = () => {
  return (
    <div className="relative">
      <Navbar /> {/* Add Navbar at the top, it's positioned fixed */}
      <div className="min-h-screen bg-college-bg bg-cover bg-center flex flex-col items-center justify-center text-center pt-16">
        {/* Padding top (pt-16) here equals the height of the Navbar */}
      </div>
      <CarouselPage /> {/* Include the CarouselPage component */}
      <CoursesPage /> {/* Include the CoursesPage component */}
      <div id="formPage">
        <FormPage />
      </div>
    </div>
  );
};

export default MainPage;
