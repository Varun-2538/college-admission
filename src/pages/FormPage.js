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
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Delhi">Delhi</option>
              <option value="Puducherry">Puducherry</option>
            </select>
            <input 
              type="text" 
              name="city" 
              placeholder="Enter City" 
              className="w-1/2 p-2 border rounded" 
              onChange={handleChange}
              required 
            />
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
              placeholder="Enter Stream" 
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
