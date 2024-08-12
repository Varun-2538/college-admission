import React from "react";
import "./index.css"; // Ensure Tailwind CSS is imported
import CarouselPage from "./pages/CarouselPage";
import FormPage from "./pages/FormPage";
import CoursesPage from "./components/CoursePage";
import Navbar from "./components/Navbar";
import FloatingButton from "./components/FloatingButton";

const MainPage = () => {
  const scrollToFormPage = () => {
    const formPage = document.getElementById("formPage");
    if (formPage) {
      formPage.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="min-h-screen bg-college-bg bg-cover bg-center flex flex-col items-center justify-start text-center pt-20">
        <h1 className="text-4xl text-black font-bold animate-slideDown mt-8 font-sans">
          Welcome to Admissions of Our Colleges
        </h1>
        <p
          className="text-2xl font-bold text-white bg-blue-600 px-4 py-2 rounded-lg shadow-lg border-2 border-white mt-4 animate-pulse cursor-pointer"
          onClick={scrollToFormPage}
        >
          Admission Open 2024-25
        </p>
        <div className="flex justify-start w-full px-10">
          <div className="text-left w-full ">
            <p className="text-3xl text-black font-bold mt-24 ml-60">
              Don't Worry For 12th Marks
            </p>
            <p className="text-2xl font-bold text-blue-800 mt-4 ml-60">
              Explore Our UG & PG Program
            </p>
            <div className="flex flex-row  place-content-evenly mt-12 ml-60 mr-60">
              <FloatingButton
                name="Engineering"
                className="mt-4"
                onClick={scrollToFormPage}
              />
              <FloatingButton
                name="Medical"
                className="mt-4"
                onClick={scrollToFormPage}
              />
              <FloatingButton
                name="Law"
                className="mt-4"
                onClick={scrollToFormPage}
              />
              <FloatingButton
                name="Management"
                className="mt-4"
                onClick={scrollToFormPage}
              />
            </div>
          </div>
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
