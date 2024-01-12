import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; 


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phonenumber: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("name",formData) 
    try {
  await axios.post('http://localhost:3001/signup', formData);
      alert('User created successfully');
    } catch (error) {
        console.log(error)
   
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='signup-container '>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        /><br /><br />
 <label>Surname</label><br />
        <input
          type="text"
          placeholder="Surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        /><br /><br />

        <label>Email</label><br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /><br /><br />
          <label>Phonenumber</label><br />
        <input
          type="number"
          placeholder="Phonenumber"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

