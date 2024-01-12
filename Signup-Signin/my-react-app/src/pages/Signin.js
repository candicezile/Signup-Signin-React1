import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; 


const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '', 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("name",formData) 

    try {
      const response = await axios.post('http://localhost:3001/signin', formData);

      if (response.data.success) {
        alert('Signin successful');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
     console.log();
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='signup-container'>
      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label><br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email} 
          onChange={handleChange}
        /><br /><br />
        <label>Name</label><br />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name} 
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
