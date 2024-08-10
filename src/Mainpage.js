import React from 'react';
import './index.css'; // Ensure Tailwind CSS is imported
import CarouselPage from './pages/CarouselPage';
import FormPage from './pages/FormPage';
import CoursesPage from './components/CoursePage';
import Navbar from './components/Navbar';

const MainPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="min-h-screen bg-college-bg bg-cover bg-center flex flex-col items-center justify-start text-center pt-60">
        <h1 className="text-4xl text-white font-bold animate-slideDown mt-[-48px]">
          Welcome to Admissions of Our Colleges
        </h1>
        <div className="flex justify-start items-start w-full px-10">
          <div className="text-left w-full animate-slideInLeft">
            <p className="text-3xl font-bold text-white mt-4">Don't Worry<br/>For 12th Marks</p>
            {/* <p className="text-4xl font-bold bg-opacity-50 rounded-lg bg-gray-700 text-white mt-4">Less Then 60% Marks In PCM</p> */}
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-80">
          <p className="text-2xl font-bold text-white">Explore Our<br/>UG & PG Program</p>
          <p className="text-2xl font-bold text-blue mt-4">Admission Open 2024-25</p>
        </div>
      </div>

      <CarouselPage />
      <CoursesPage />
      <div id="formPage">
        <FormPage />
      </div>
    </div>
  );
};

export default MainPage;
