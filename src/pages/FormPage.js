import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'tailwindcss/tailwind.css';
import image2 from '../assets/rocket.svg';
import StarsCanvas from '../components/StarsCanvas'; // Import the StarsCanvas component

const FormPage = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    name: '',
    phone: '',
    email: '',
    state: '',
    city: '',
    percentage: '',
    college: '', // College name field
    stream: '',
    reply_to: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_efjeq0m', 'template_grzp0dr', e.target, 'kS_94InM8xQ0rVMJx')
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert('Email sent successfully!');
      }, (error) => {
          console.log('FAILED...', error.text);
          alert('Email failed to send.');
      });
    
    e.target.reset();
  };

  return (
    <div className="relative min-h-screen flex">
      <StarsCanvas /> {/* Add the stars background */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100 p-8 z-10">
        <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-8 text-center">College Admission Form</h2>
          <div className="mb-4">
            <input 
              type="text" 
              name="from_name" 
              placeholder="Enter your name" 
              className="w-full p-2 border rounded" 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              type="tel" 
              name="phone" 
              placeholder="Enter your phone number" 
              className="w-full p-2 border rounded" 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your Email ID" 
              className="w-full p-2 border rounded" 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-4 flex">
            <select 
              name="state" 
              className="w-1/2 p-2 border rounded mr-2" 
              onChange={handleChange}
              required 
            >
              <option value="">Select State</option>
              <option value="State1">State 1</option>
              <option value="State2">State 2</option>
              {/* Add more options as needed */}
            </select>
            <select 
              name="city" 
              className="w-1/2 p-2 border rounded" 
              onChange={handleChange}
              required 
            >
              <option value="">Select City</option>
              <option value="City1">City 1</option>
              <option value="City2">City 2</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              name="percentage" 
              placeholder="Select 12 Percentage" 
              className="w-full p-2 border rounded" 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-4">
            <select 
              name="college" 
              className="w-full p-2 border rounded" 
              onChange={handleChange}
              required
            >
              <option value="">Select College</option>
              <option value="SRM University Chennai">SRM University Chennai</option>
              <option value="SSN College of Engineering">SSN College of Engineering</option>
              <option value="Anna University">Anna University</option>
              <option value="VIT Vellore">VIT Vellore</option>
              <option value="Presidency College, Chennai">Presidency College, Chennai</option>
              <option value="Christ University, Bangalore">Christ University, Bangalore</option>
              <option value="Bangalore University">Bangalore University</option>
              <option value="Ramaiah Institute of Technology">Ramaiah Institute of Technology</option>
              <option value="R.V. College of Engineering">R.V. College of Engineering</option>
              <option value="BMS College of Engineering">BMS College of Engineering</option>
              <option value="PES University">PES University</option>
            </select>
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              name="stream" 
              placeholder="Select Stream" 
              className="w-full p-2 border rounded" 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">SUBMIT</button>
          </div>
        </form>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-200 z-10">
        <img src={image2} alt="College Admission" className="max-w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default FormPage;
